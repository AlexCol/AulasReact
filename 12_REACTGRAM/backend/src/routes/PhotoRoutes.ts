import { NextFunction, Request, Response, Router } from "express";

//+ Controller
import { commentPhoto, deletePhoto, getAllPhotos, getPhotoById, getUserPhotos, insertPhoto, insertPhotoBytes, likePhoto, seachPhotos, updatePhoto } from "../controllers/PhotoController";

//+ Middlewares
import {photoInsertValidation, photoUpdateValidation, commentValidation} from '../middleware/validations/photoValidation';
import {authGuard} from '../middleware/AuthGuard';
import {validate} from '../middleware/handleValidation';
import { imageUpload, imageUploadBytes } from "../middleware/imageUpload";

//+Routes
const photosRoutes = Router();

photosRoutes.get('/', authGuard, getAllPhotos);
photosRoutes.get('/search', authGuard, seachPhotos);
photosRoutes.get('/:id', authGuard, getPhotoById);
photosRoutes.get('/user/:id', authGuard, getUserPhotos);
photosRoutes.post('/', authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
photosRoutes.post('/byte', authGuard, imageUploadBytes.single("image"), photoInsertValidation(), validate, insertPhotoBytes);
photosRoutes.put('/:id', authGuard, photoUpdateValidation(), validate, updatePhoto);
photosRoutes.put('/like/:id', authGuard, likePhoto);
photosRoutes.put('/comment/:id', authGuard, commentValidation(), validate, commentPhoto);
photosRoutes.delete('/:id', authGuard, deletePhoto);

export default photosRoutes;



