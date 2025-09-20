import { Router } from "express";
import catService from "../services/catService.js";

const catController = Router();

catController.get("/cats/add-cat", (req, res) => {
   res.send("Add cat Page");
});

export default catController;
