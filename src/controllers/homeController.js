import { Router } from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
   res.render("home", { title: "Home Page", showSearchForm: true });
});

export default homeController;
