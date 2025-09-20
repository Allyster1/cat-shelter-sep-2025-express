import { Router } from "express";

const breedController = Router();

breedController.get("/add-breed", (req, res) => {
   res.render("addBreed", { title: "Add Breed" });
});

export default breedController;
