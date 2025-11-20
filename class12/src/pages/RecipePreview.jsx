import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../context/recipe";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

function RecipePreview() {
  const { id } = useParams();
  const { getRecipeById } = useRecipe();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRecipe = async () => {
    // First try from context (faster)
    const fromContext = getRecipeById(id);

    if (fromContext) {
      setRecipe(fromContext);
      setLoading(false);
      return;
    }

    // If not found in context → fetch from backend
    try {
      const res = await api.get(`/recipe/${id}`);
      setRecipe(res.data);
    } catch (err) {
      console.error("Failed to load recipe", err);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) loadRecipe();
  }, [id]);

  if (loading) return <h1>Loading recipe...</h1>;
  if (!recipe) return <h1>No recipe found!</h1>;

  return (
    <div>
      <h1 className="momo-signature-regular text-4xl py-6 text-center">
        Taste this yummy{" "}
        <span className="font-bold underline underline-offset-6">
          {recipe.category || "Cuisine"}
        </span>{" "}
        cuisine
      </h1>

      <div className="w-full h-[400px] overflow-hidden rounded-xl my-4">
        <img
          src={recipe.image || recipe.thumbnail || "/placeholder.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <h1 className="text-2xl font-medium">Ingredients:</h1>

        {recipe.ingredients?.map((ingredient, idx) => (
          <h1 key={idx} className="text-lg text-slate-800">
            {ingredient}
          </h1>
        ))}
      </div>

      <h1 className="text-center text-4xl py-4">
        Make the dish in{" "}
        <span className="font-bold">
          {recipe.cookTime || recipe.cookTimeMinutes || "N/A"} min
        </span>
      </h1>
    </div>
  );
}

export default RecipePreview;
