import { Router } from "express";

//+ Controller
import { getCurrentUser, getUserById, login, register, update } from "../controllers/UserController";

//+middlewares
import {validate} from "../middleware/handleValidation";
import { userCreateValidation, loginValidation, userUpdateValidation } from "../middleware/validations/userValidation";
import { authGuard } from "../middleware/AuthGuard";
import { imageUpload } from "../middleware/imageUpload";

//+ Routes
const userRoutes = Router();

userRoutes.get("/profile", authGuard, getCurrentUser);
userRoutes.get('/:id', authGuard, getUserById);
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);
userRoutes.put('/', authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);//devido a image, os dados devem ser enviados em form-data

export default userRoutes;