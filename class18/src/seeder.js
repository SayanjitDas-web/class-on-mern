require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const { Recipe } = require("./models/Recipe.model");

const MONGO_URI = process.env.MONGO_URI;

// Connect to DB
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
}

async function seedRecipes() {
  try {
    console.log("Fetching recipes from API...");

    const { data } = await axios.get("https://dummyjson.com/recipes");
    const recipes = data.recipes;

    console.log(`Fetched ${recipes.length} recipes`);

    // Map API fields -> schema fields
    const formatted = recipes.map((r) => ({
      title: r.name,
      ingredients: r.ingredients || [],
      instructions: r.instructions ? r.instructions.join(" ") : "No instructions available",
      steps: r.instructions ? r.instructions.join("\n") : "",
      prepTime: r.prepTimeMinutes || 0,
      cookTime: r.cookTimeMinutes || 0,
      servings: r.servings || 1,
      category: convertCategory(r.mealType),
      tags: r.tags || [],
    }));

    console.log("Clearing old recipes...");
    await Recipe.deleteMany();

    console.log("Inserting new recipes...");
    await Recipe.insertMany(formatted);

    console.log("Seeding completed successfully!");
    process.exit(0);

  } catch (err) {
    console.error("Seeder error:", err);
    process.exit(1);
  }
}

// Convert dummyJSON meal type -> allowed categories
function convertCategory(mealTypeArr) {
  if (!mealTypeArr || mealTypeArr.length === 0) return "Dinner";

  const mealType = mealTypeArr[0].toLowerCase();

  if (mealType.includes("breakfast")) return "Breakfast";
  if (mealType.includes("lunch")) return "Lunch";
  if (mealType.includes("dinner")) return "Dinner";
  if (mealType.includes("snack")) return "Snack";
  if (mealType.includes("dessert")) return "Dessert";

  return "Dinner"; // default fallback
}

(async () => {
  await connectDB();
  await seedRecipes();
})();
