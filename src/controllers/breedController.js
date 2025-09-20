import { Router } from "express";
import breedService from "../services/breedService.js";

const breedController = Router();

breedController.get("/add-breed", (req, res) => {
  res.render("addBreed", { title: "Add Breed" });
});

breedController.post("/add-breed", async (req, res) => {
  const breedData = req.body;

  await breedService.create(breedData);

  res.redirect("/");
});

export default breedController;
