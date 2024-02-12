import { Router } from "express";
import { getCurrentUser, login, register } from "../controllers/UserController";
import validate from "../middleware/handleValidation";
import { userCreateValidation, loginValidation } from "../middleware/userValidation";
import { authGuard } from "../middleware/AuthGuard";

const userRoutes = Router();

userRoutes.get("/profile", authGuard, getCurrentUser);
userRoutes.post("/register", userCreateValidation(), validate, register);
userRoutes.post("/login", loginValidation(), validate, login);


export default userRoutes;