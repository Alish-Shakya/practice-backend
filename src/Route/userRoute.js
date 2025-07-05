import { Router } from "express";
import { createUser } from "../Controller/userController";

const userRouter = Router();

userRouter.route("/userCreated").post(createUser);

export default userRouter;
