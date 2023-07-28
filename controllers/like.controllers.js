const mongoose = require("mongoose");
const Recipe = mongoose.model("recipes");

exports.postLikes = async (req, res) => {
    const recipeId = req.params.id;
    await Recipe.findByIdAndUpdate(
      { _id: recipeId },
      { $inc: { likes: 1 } },
      { new: true }
    );
    
    res.redirect("/recepti/" + recipeId);
  };