import { Router } from "express";
import {
  login,
  myProfile,
  register,
  verifyEmail,
} from "../Controller/webUserController.js";
import webUserSchema from "../Schema/webUserSchema.js";
import { isAuthenticated } from "../middleWare/Authenticated.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);
webUserRouter.route("/verifyEmail").get(verifyEmail);
webUserRouter.route("/login").post(login);

webUserRouter.route("/profile").get(isAuthenticated, myProfile);
export default webUserRouter;
