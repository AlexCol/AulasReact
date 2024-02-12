import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/UserModel';

export const authGuard = async (req: Request, res: Response, next: NextFunction) => {	
	const jwtSecret = process.env.JWT_SECRET || '';
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(" ")[1];
	
	if(!token) { //+valida se o token veio, se não vier já retorna
		return res.status(401).json({errors: "Acesso negado."});
	}

	try {
		const verified = jwt.verify(token, jwtSecret); //+valida o token, se não achar, joga no catch
		if (typeof verified === "string") return res.status(401).json({errors: "Token invalido."});
		
		//+para aceitar isso, criado arquivo 'custom.d.ts' e informado ele no arquivo 'tsconfig.json'
		req.user = await UserModel.findById(verified.id).select("-password"); //+tenta buscar o usuário, se não achar, joga no catch
		next();
	} catch (error) {
		return res.status(401).json({errors: "Token invalido."});
	}
}