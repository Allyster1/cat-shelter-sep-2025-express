import { Router } from "express";
import catService from "../services/catService.js";

const catController = Router();

catController.get("/add-cat", (req, res) => {
   res.render("addCat", { title: "Add Cat Page" });
});

export default catController;
