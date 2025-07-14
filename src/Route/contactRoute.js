// src/Route/contactRoute.js
import { Router } from "express";
import { createContact } from "../Controller/contactController.js";

const contactRouter = Router();

contactRouter.post("/contact", createContact);

export default contactRouter;
