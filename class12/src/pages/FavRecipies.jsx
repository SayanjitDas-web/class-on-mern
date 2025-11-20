import { useRecipe } from "../context/recipe";
import RecipePreviewCard from "../customComponents/RecipePreviewCard";

function FavRecipies() {
  const { recipes, favorites } = useRecipe();

  // Filter only backend-favorite recipes
  const favRecipes = recipes.filter((r) => favorites.includes(r._id));

  return (
    <div className="flex flex-wrap items-center gap-4">
      {favRecipes.length > 0 ? (
        favRecipes.map((recipe) => (
          <RecipePreviewCard
            key={recipe._id}
            id={recipe._id}
            name={recipe.title}
            rating={recipe.rating}
            imageSrc={recipe.image || recipe.thumbnail || "/placeholder.jpg"}
            favorite={true}
          />
        ))
      ) : (
        <h1>No favorite recipes found!</h1>
      )}
    </div>
  );
}

export default FavRecipies;
