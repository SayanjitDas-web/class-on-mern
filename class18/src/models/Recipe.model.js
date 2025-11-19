const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    instructions: {
      type: String,
      required: true,
    },
    steps: {
      type: String,
    },
    prepTime: {
      type: Number, // in minutes
      default: 0,
    },
    cookTime: {
      type: Number, // in minutes
      default: 0,
    },
    servings: {
      type: Number,
      default: 1,
    },
    category: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"], //extraa
    },
    tags: [String], // e.g. ['vegan', 'spicy', 'gluten-free']
  },
  { timestamps: true }
);

exports.Recipe = mongoose.model("Recipe", recipeSchema);
