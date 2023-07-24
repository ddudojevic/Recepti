const mongoose = require("mongoose");
const Recipe = mongoose.model("recipes");
const Category = mongoose.model("categories");


exports.getAddRecipe = async (req, res) => {
  const categories = await Category.find();
  res.render("add-recipe", {
    pageTitle: "Dodaj recept",
    path: "/add-recipe",
    categories,
  });
};

exports.postAddRecipe = async (req, res) => {
  const { name, imgUrl, description, categoryId, sastojak } = req.body;
  await Recipe.create({ name, imgUrl, description, categoryId, sastojak });
  res.redirect("/recipes");
};

exports.recipes = async (req, res) => {
    const recipes = await Recipe.find();
    res.render("recipes", {
        pageTitle: "Recepti",
        path: "/recepti",
        recipes
    }) 
}
