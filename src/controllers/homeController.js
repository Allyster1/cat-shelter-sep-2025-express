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

homeController.get("/search", async (req, res) => {
  const searchQuery = req.query.search || "";
  const cats = await catService.search(searchQuery);

  res.render("home", {
    title: searchQuery
      ? `Search Results for "${searchQuery}"`
      : "Search Results",
    headerTitle: "Cat Shelter",
    showSearchForm: true,
    searchQuery,
    cats,
  });
});

export default homeController;
