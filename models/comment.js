const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  comment: String,
  recipeId: mongoose.Types.ObjectId,
});

mongoose.model("comments", commentSchema);