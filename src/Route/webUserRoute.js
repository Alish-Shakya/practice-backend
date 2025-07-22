import { Router } from "express";
import {
  forgotPasssword,
  login,
  myProfile,
  register,
  updatePassword,
  updateProfile,
  verifyEmail,
} from "../Controller/webUserController.js";
import { isAuthenticated } from "../middleWare/Authenticated.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);
webUserRouter.route("/verifyEmail").get(verifyEmail);
webUserRouter.route("/login").post(login);

webUserRouter.route("/profile").get(isAuthenticated, myProfile);
webUserRouter.route("/updateProfile").patch(isAuthenticated, updateProfile);
webUserRouter.route("/updatePassword").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forgotPassword").post(forgotPasssword);
export default webUserRouter;
