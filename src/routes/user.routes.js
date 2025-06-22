import express from "express";
import { userRegister } from "../controllers/user.controller.js";
import { userLogin } from "../controllers/user.controller.js";

const authRouter = express.Router();

authRouter.post("/register", userRegister);
authRouter.post("/login", userLogin);

export default authRouter;
