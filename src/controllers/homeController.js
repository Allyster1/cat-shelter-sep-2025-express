import { Router } from "express";
import catService from "../services/catService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  const cats = await catService.getAll();

  res.render("home", {
    title: "Home Page",
    headerTitle: "Cat Shelter",
    showSearchForm: true,
    cats,
  });
});

export default homeController;
