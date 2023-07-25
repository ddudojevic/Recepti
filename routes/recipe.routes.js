const express = require("express");
const router = express.Router();

const RecipeController = require("../controllers/recipe.controllers");

router.get("/recipes", RecipeController.getRecipes)

router.get("/add-recipe", RecipeController.getAddRecipe);
router.post("/add-recipe", RecipeController.postAddRecipe);

module.exports = router;