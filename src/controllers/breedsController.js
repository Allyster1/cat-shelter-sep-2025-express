import { Router } from "express";

breedController = Router();

breedController.get("/add-breed", (req, res) => {
   res.send("Cat Breed Page");
});

export default breedController;
