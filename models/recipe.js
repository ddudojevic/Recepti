const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  imgUrl: String,
  description: String,
  categoryId: mongoose.Types.ObjectId,
  sastojak: [String],
});

mongoose.model("recipes", recipeSchema);
