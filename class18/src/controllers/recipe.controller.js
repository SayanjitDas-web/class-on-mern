const User = require("../models/User.model");
const { Recipe } = require("../models/Recipe.model");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();  // get all documents

    res.status(200).json({
      count: recipes.length,
      recipes
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addToFavorites = async (req, res) => {
  try {
    const userId = req.user._id;
    const recipeId = req.params.id;

    // ensure recipe exists
    const recipe = await Recipe.findById(recipeId);
    if (!recipe)
      return res.status(404).json({ message: "Recipe not found" });

    await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId }
    });

    res.status(200).json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromFavorites = async (req, res) => {
  try {
    const userId = req.user._id;
    const recipeId = req.params.id;

    await User.findByIdAndUpdate(userId, {
      $pull: { favorites: recipeId }
    });

    res.status(200).json({ message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).populate("favorites");

    res.status(200).json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
