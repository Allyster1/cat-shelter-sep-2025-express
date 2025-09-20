import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";

const catController = Router();

catController.get("/add-cat", async (req, res) => {
   const breeds = await breedService.getAll();

   res.render("addCat", { title: "Add Cat", breeds });
});

catController.post("/add-cat", async (req, res) => {
   const catData = req.body;

   await catService.create(catData);

   res.redirect("/");
});

export default catController;
