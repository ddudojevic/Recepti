const express = require("express");
const router = express.Router();

const RecipeController = require("../controllers/recipe.controllers");

router.get("/recepti", RecipeController.getRecipes);

router.get("/dodaj-recept", RecipeController.getAddRecipe);
router.post("/dodaj-recept", RecipeController.postAddRecipe);

router.get("/recepti/:id", RecipeController.getRecipe);


module.exports = router;
