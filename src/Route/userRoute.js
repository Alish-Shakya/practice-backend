import { Router } from "express";
import {
  createUser,
  deleteUser,
  readUser,
  singleUser,
  updateUser,
} from "../Controller/userController.js";

const userRouter = Router();

userRouter.route("/userCreated").post(createUser);
userRouter.route("/read-user").get(readUser);

userRouter.route("/single-user/:id").get(singleUser);
userRouter.route("/update-user/:id").patch(updateUser);
userRouter.route("/delete-user/:id").delete(deleteUser);
export default userRouter;
