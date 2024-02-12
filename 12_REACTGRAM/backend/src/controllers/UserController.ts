import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { UserModel } from "../models/UserModel";
import { Types } from "mongoose";

const generateToken = (id: Types.ObjectId) => {
	const jwtSecret:string = process.env.JWT_SECRET || '';
	return jwt.sign({id}, jwtSecret, {
		issuer: "myIssuer",
		audience: "myAudience",
		expiresIn: "7d"
	})

	// //! exemplo para geração de claims no token
	// const jwtSecret:string = process.env.JWT_SECRET || '';
	// const _user = await UserModel.findById(id);	
	// if (!_user) throw error("Usuário não encontrado para geração do token.");
	
	// const name = _user.get("name");
	// const role = ["admin", "client"];

	// return jwt.sign({id, name, role}, jwtSecret, {
	// 	issuer: "myIssuer",
	// 	audience: "myAudience",
	// 	expiresIn: "7d"
	// })
};

export const register = async (req: Request, res: Response) => {
	const {name, email, password} = req.body;

	const user = await UserModel.findOne({email});

	if(user) {
		res.status(422).json({errors: ["Email já cadastrado!"]});
		return;
	}

	//convertendo a senha em hash
	const salt = await bcrypt.genSalt();
	const passwordHash = await bcrypt.hash(password, salt);

	//create user
	const newUser = await UserModel.create({
		name,
		email,
		password: passwordHash
	})

	if(!newUser) {
		res.status(422).json({errors: "Houve um erro, tente novamente mais tarde."});
		return;
	}
	
	res.status(201).json({
		_id: newUser._id,
		token: await generateToken(newUser._id)
	});
};

export const login = async (req: Request, res: Response) => {
	const {email, password} = req.body;
	const errMessage = "Usuário ou Senha incorretos."

	const user = await UserModel.findOne({email});
	
	if(!user || !user.password) {
		res.status(404).json({errors: errMessage});
		return;
	}

	if(!(await bcrypt.compare(password, user.password))) {
		res.status(404).json({errors: errMessage});
		return;
	}

	res.status(200).json({
		_id: user._id,
		profileImage: user.profileImage,
		token: await generateToken(user._id)
	});
}

export const getCurrentUser = async (req: Request, res: Response) => {
	const user = req.body;
	res.status(200).json(user);
}