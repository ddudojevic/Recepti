const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

require("./models/recipe");
require("./models/comment");
require("./models/category");

const recipesRoutes = require("./routes/recipe.routes");
const commentRoutes = require("./routes/comment.routes");
const likeRoutes = require("./routes/likes.routes");

app.use(recipesRoutes);
app.use(commentRoutes);
app.use(likeRoutes);

app.get("*", (req, res) => {
  res.redirect("/recepti");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/recipesaai")
  .then(() => app.listen(5000));
