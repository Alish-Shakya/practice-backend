import { Router } from "express";
import { createUser, readUser, singleUser } from "../Controller/userController";

const userRouter = Router();

userRouter.route("/userCreated").post(createUser);
userRouter.route("/read-user").get(readUser);

userRouter.route("/single-user/id").get(singleUser);
export default userRouter;
