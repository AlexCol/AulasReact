import { NextFunction, Request, Response } from "express";
import multer from "multer";

const imageStorage = multer.diskStorage({
	destination: function(req, file, callback) {
		let folder = '';

		if (req.baseUrl.includes("users")) {
			folder = "users";
		} else if (req.baseUrl.includes("photos")) {
			folder = "photos";
		}

		callback(null, `src/uploads/${folder}`);
	},
	filename: function(req, file, callback) {
		callback(null, Date.now() + file.originalname)
	}
});

export const imageUpload = multer( {
	storage: imageStorage, ///para salvar usando a metodologia acima, em uma pasta local
	fileFilter(req, file, callback) {
		if(!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
			//upload only png and jpg files
			callback(new Error("Por favor, envie apenas png ou jpg!"));
		}
		callback(null, true);
	}
})

export const imageUploadBytes = multer( {
	storage: multer.memoryStorage(), //para salvar na memoria, e ter acesso aos bytes da imagem
	fileFilter(req, file, callback) {
		if(!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
			//upload only png and jpg files
			callback(new Error("Por favor, envie apenas png ou jpg!"));
		}
		callback(null, true);
	}
})