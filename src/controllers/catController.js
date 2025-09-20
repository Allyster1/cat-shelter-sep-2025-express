import { Router } from "express";
import catService from "../services/catService.js";

const catController = Router();

catController.get("/add-cat", (req, res) => {
   res.render("addCat", { title: "Add Cat" });
});

catController.post("/add-cat", async (req, res) => {
   const catData = req.body;

   await catService.create(catData);

   res.redirect("/");
});

export default catController;
