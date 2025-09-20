import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";

const catController = Router();

// Add cat

catController.get("/add-cat", async (req, res) => {
  const breeds = await breedService.getAll();

  res.render("addCat", { title: "Add Cat", breeds });
});

catController.post("/add-cat", async (req, res) => {
  const catData = req.body;

  await catService.create(catData);

  res.redirect("/");
});

// Edit cat

catController.get("/edit-cat/:id", async (req, res) => {
  const catId = req.params.id;
  const cat = await catService.getById(catId);
  const allBreeds = await breedService.getAll();

  const breeds = allBreeds.map((breed) => ({
    ...breed,
    selected: breed.breed === cat.breed,
  }));

  res.render("editCat", { title: "Edit Cat", ...cat, breeds });
});

catController.post("/edit-cat/:id", async (req, res) => {
  const catId = req.params.id;
  const catData = req.body;

  await catService.update(catId, catData);

  res.redirect("/");
});

// Delete cat

catController.get("/delete-cat/:id", async (req, res) => {
  res.send("Delete cat page");
});

export default catController;
