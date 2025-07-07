import { Router } from "express";
import { createUser, readUser } from "../Controller/userController";

const userRouter = Router();

userRouter.route("/userCreated").post(createUser);
userRouter.route("/read-user").get(readUser);

export default userRouter;
