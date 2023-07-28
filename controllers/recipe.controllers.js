const mongoose = require("mongoose");
const Recipe = mongoose.model("recipes");
const Category = mongoose.model("categories");
const Comment = mongoose.model("comments");

exports.getRecipes = async (req, res) => {
  const sortOption = req.query.sort;
  let sortCriteria = {};
  if (sortOption === "likes") {
    sortCriteria.likes = -1;
  } else if (sortOption === "createdAt") {
    sortCriteria.createdAt = -1;
  } else {
    sortCriteria.likes = -1;
  }
  const recipes = await Recipe.find().sort(sortCriteria);
  const categories = await Category.find();
  res.render("recipes", {
    pageTitle: "Recepti",
    path: "/recepti",
    recipes,
    categories,
    sortOption,
  });
};

exports.getAddRecipe = async (req, res) => {
  const categories = await Category.find();
  res.render("add-recipe", {
    pageTitle: "Dodaj recept",
    path: "/dodaj-recept",
    categories,
  });
};

exports.postAddRecipe = async (req, res) => {
  const { name, imgUrl, description, categoryId, sastojak } = req.body;
  const currentTime = new Date();
  await Recipe.create({
    name,
    imgUrl,
    description,
    categoryId,
    sastojak,
    createdAt: currentTime,
  });
  res.redirect("/recepti");
};

exports.getRecipe = async (req, res) => {
  const recipeId = req.params.id;
  const recipe = await Recipe.findById(recipeId);
  const comments = await Comment.find({ recipeId: recipeId });
  res.render("recipe-details", {
    pageTitle: recipe.name,
    path: "/recept/:id",
    recipe,
    comments,
  });
};
