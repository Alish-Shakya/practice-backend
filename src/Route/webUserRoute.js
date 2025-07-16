import { Router } from "express";
import { register, verifyEmail } from "../Controller/webUserController.js";

const webUserRouter = Router();

webUserRouter.route("/register").post(register);
webUserRouter.route("/verifyEmail").get(verifyEmail);
export default webUserRouter;
