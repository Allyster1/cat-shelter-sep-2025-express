import { Router } from "express";

const breedController = Router();

breedController.get("/add-breed", (req, res) => {
   res.render("addBreed", { title: "Add Breed" });
});

breedController.post("/add-breed", (req, res) => {
   console.log(req.body);
   res.send("Breed added");
});

export default breedController;
