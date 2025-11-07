import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  Utensils,
  Timer,
  Tag,
  ShoppingBasket,
  Waypoints,
  ArrowBigRight,
} from "lucide-react";
import { useRecipe } from "../context/recipe";

function Recipe() {
  const { id } = useParams();
  const { recipes, getRecipeById } = useRecipe();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id && recipes.length > 0) {
      const found = getRecipeById(id);
      if (found) setRecipe(found);
    }
  }, [id, recipes]);

  if (!recipe) return <h1 className="text-center text-2xl">Loading...</h1>;

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-center items-center w-[300px] lg:w-[500px] h-[300px] overflow-hidden rounded-xl m-2">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className="momo-signature-regular text-2xl lg:text-4xl mb-4">{recipe.name}</h1>

          <h2 className="flex items-center gap-2 text-xl lg:text-2xl my-2">
            <Star fill="black" /> - {recipe.rating}
          </h2>

          <h2 className="flex items-center gap-1 text-2xl font-medium">
            <Utensils /> - {recipe.cuisine}
          </h2>

          <h2 className="my-2 font-medium text-2xl flex items-center gap-2">
            <Timer /> ready in: {recipe.prepTimeMinutes} mins
          </h2>

          <section className="flex flex-wrap items-center text-2xl gap-2">
            <Tag />
            <span className="font-medium">tags:</span>
            {recipe.tags?.length ? (
              recipe.tags.map((tag, i) => (
                <h2 key={i} className="px-1">
                  #{tag}
                </h2>
              ))
            ) : (
              <h2>No tags found</h2>
            )}
          </section>
        </div>
      </div>

      <section className="my-6">
        <h1 className="flex items-center text-3xl gap-2 momo-trust-display-regular">
          <ShoppingBasket /> Ingredients
        </h1>
        <div className="flex flex-wrap items-center">
          {recipe.ingredients?.map((ingredient, i) => (
            <h1 key={i} className="mr-2 text-xl">
              {ingredient}
              {i < recipe.ingredients.length - 1 && ","}
            </h1>
          ))}
        </div>
      </section>

      <section className="my-4">
        <h1 className="my-2 flex items-center text-3xl gap-2 momo-trust-display-regular">
          <Waypoints /> Follow the steps to make this tasty cuisine
        </h1>
        <div>
          {recipe.instructions?.map((instruction, i) => (
            <div key={i} className="my-4">
              <p className="font-medium text-lg lg:text-xl flex items-center gap-2">
                <ArrowBigRight fill="black" /> step-{i + 1}
              </p>
              <span className="caveat-500 text-3xl">{instruction}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipe;
