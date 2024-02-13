
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { UserModel } from '../models/UserModel';
import { PhotoModel } from '../models/PhotoModel';
import { body } from 'express-validator';

export const insertPhoto = async (req: Request, res: Response) => {
	
	console.log(req.body);

	if(!req.file) return res.status(404).send("Foto não enviada.");
	const {title} = req.body;
	const image = req.file.filename;

	const reqUser = req.user;
	const user = await UserModel.findById(reqUser._id);

	const newPhoto = await PhotoModel.create({
		image,
		title,
		userId: user?._id,
		userName: user?.name
	});

	if(!newPhoto) {
		res.status(422).json({erros: "Houve um erro no sistema, tente novamente mais tarde."});
	}

	res.status(201).json(newPhoto);
}

export const deletePhoto = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");

	const reqUser = req.user;

	const photo = await PhotoModel.findById(id);

	if (!photo) return res.status(404).send("Foto não encontrada.");

	if (!reqUser._id.equals(photo.userId)) return res.status(404).send("Foto não é do seu usuário.");

	await PhotoModel.findByIdAndDelete(id);

	return res.status(200).send({id: photo?._id, message: "Foto excluida com sucesso."});
}

export const getAllPhotos = async (req: Request, res: Response) => {
	const photos = await PhotoModel.find({}).sort([["createdAte", -1]]).exec();
	res.status(200).json(photos);

}

export const getUserPhotos = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");

	const photos = await PhotoModel.find({userId: id}).sort([["createdAte", -1]]).exec();
	res.status(200).json(photos);
}

export const updatePhoto = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");
	
	const {title} = req.body;

	const reqUser = req.user;

	const photo = await PhotoModel.findById(id);

	if (!photo) return res.status(404).send("Foto não encontrada.");	
	if (!reqUser._id.equals(photo.userId)) return res.status(404).send("Foto não é do seu usuário.");

	if(title) {
		photo.title = title;
	}

	await photo.save();

	return res.status(200).json(photo);
}

export const getPhotoById = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");

	const photo = await PhotoModel.findById(id);

	if (!photo) return res.status(404).send("Foto nao encontrada.");

	return res.status(200).json(photo);
}

export const likePhoto = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");
	const reqUser = req.user;

	const photo = await PhotoModel.findById(id);

	if (!photo) return res.status(404).send("Foto nao encontrada.");

	if(photo.likes.includes(reqUser._id)) return res.status(422).send("Usuário já deu like nessa foto.");

	photo.likes.push(reqUser._id);

	await photo.save();

	return res.status(200).send({
		photoId : photo._id,
		userId: reqUser._id,
		message: "A foto foi curtida."
	});
}

export const commentPhoto = async (req: Request, res: Response) => {
	const {id} = req.params;
	if (!mongoose.isValidObjectId(id)) return res.status(404).send("Invalid Id.");
	const {comment} = req.body;

	const user = await UserModel.findById(req.user._id);
	if (!user) return res.status(404).send("Usuário nao encontrado.");

	const photo = await PhotoModel.findById(id);
	if (!photo) return res.status(404).send("Foto nao encontrada.");

	const userComment = {
		comment,
		userName: user.name,
		userImage: user.profileImage,
		userId: user._id
	};
	photo.comments.push(userComment);

	await photo.save();

	return res.status(200).send({
		comment: userComment,
		message: "Comentário realizado."
	});
}

export const seachPhotos = async (req: Request, res: Response) => {
	const {query} = req.query; //vai pegar o valor de q na url; ex: localhosto:3000/api/photo?q=lalala vai ser pego 'lalala'

	if(typeof query !== 'string') return res.status(404).send("Busca não informada.");
	
	const photos = await PhotoModel.find({title: new RegExp(query, "i")}).exec();

	return res.status(200).json(photos);
}

export const insertPhotoBytes = async (req: Request, res: Response) => {
	
	console.log(req.body);

	if(!req.file) return res.status(404).send("Foto não enviada.");
	const {title} = req.body;
	const image = req.file.buffer;

	const reqUser = req.user;
	const user = await UserModel.findById(reqUser._id);

	const newPhoto = await PhotoModel.create({
		imageByte: image,
		title,
		userId: user?._id,
		userName: user?.name
	});

	if(!newPhoto) {
		res.status(422).json({erros: "Houve um erro no sistema, tente novamente mais tarde."});
	}

	res.set({
		'Content-Type': 'image/jpeg', // ou 'image/png' para PNG
		'Content-Length': image.length
	});
	res.status(201).send(newPhoto.imageByte);
}