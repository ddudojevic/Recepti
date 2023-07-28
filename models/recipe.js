const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  imgUrl: String,
  description: String,
  categoryId: mongoose.Types.ObjectId,
  sastojak: [String],
  likes: {
    type: Number,
    default: 0,
  },
});

mongoose.model("recipes", recipeSchema);