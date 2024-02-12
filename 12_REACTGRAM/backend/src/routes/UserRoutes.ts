import { Router } from "express";
import { getCurrentUser, getUserById, login, register, update } from "../controllers/UserController";
import validate from "../middleware/handleValidation";
import { userCreateValidation, loginValidation, userUpdateValidation } from "../middleware/userValidation";
import { authGuard } from "../middleware/AuthGuard";
import { imageUpload } from "../middleware/imageUpload";

const userRoutes = Router();

userRoutes.get("/profile", authGuard, getCurrentUser);
userRoutes.get('/:id', authGuard, getUserById);
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);

//devido a image, os dados devem ser enviados em form-data



export default userRoutes;