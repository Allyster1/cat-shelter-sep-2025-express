import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";

const catController = Router();

// Add cat

catController.get("/add-cat", async (req, res) => {
  const breeds = await breedService.getAll();

  res.render("addCat", { title: "Add Cat Page", breeds });
});

catController.post("/add-cat", async (req, res) => {
  const catData = req.body;

  await catService.create(catData);

  res.redirect("/");
});

// Edit cat

catController.get("/:id/edit-cat", async (req, res) => {
  const catId = req.params.id;
  const cat = await catService.getById(catId);
  const allBreeds = await breedService.getAll();

  const breeds = allBreeds.map((breed) => ({
    ...breed,
    selected: breed.breed === cat.breed,
  }));

  res.render("editCat", { title: "Edit Cat Page", ...cat, breeds });
});

catController.post("/:id/edit-cat", async (req, res) => {
  const catId = req.params.id;
  const catData = req.body;

  await catService.update(catId, catData);

  res.redirect("/");
});

// Cat details and delete

catController.get("/:id/details", async (req, res) => {
  const catId = req.params.id;
  const cat = await catService.getById(catId);

  if (!cat) {
    return res
      .status(404)
      .render("404", { title: "Cat not found", showSearchForm: false });
  }

  res.render("catShelter", { title: "Cat Details Page", ...cat });
});

catController.post("/:id/details", async (req, res) => {
  const catId = req.params.id;

  await catService.delete(catId);

  res.redirect("/");
});

export default catController;
