import { Router } from "express";
import catService from "../services/catService.js";

const homeController = Router();

homeController.get("/", (req, res) => {
   const cats = catService.getAll();
   res.render("home", { title: "Home Page", showSearchForm: true, cats });
});

export default homeController;
