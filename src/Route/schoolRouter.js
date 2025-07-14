import { Router } from "express";
import { createSchool } from "../Controller/studentCOntroller.js";

const schoolRouter = Router();

schoolRouter.route("/createSchool").post(createSchool);

export default schoolRouter;
