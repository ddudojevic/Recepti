const mongoose = require("mongoose");
const Comment = mongoose.model("comments");
const Recipe = mongoose.model("recipes");

exports.postComment = async (req, res) => {
  const recipeId = req.params.id;
  const { comment } = req.body;
  await Comment.create({ comment, recipeId });
  res.redirect("/recepti/" + recipeId);
};
