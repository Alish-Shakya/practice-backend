import { Router } from "express";
import {
  login,
  register,
  verifyEmail,
} from "../Controller/webUserController.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);
webUserRouter.route("/verifyEmail").get(verifyEmail);
webUserRouter.route("/login").post(login);
export default webUserRouter;
