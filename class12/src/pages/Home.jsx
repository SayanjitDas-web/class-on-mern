import RecipePreviewCard from "../customComponents/RecipePreviewCard";
import { useRecipe } from "../context/recipe";

function Home() {
  const { recipes, favorites } = useRecipe();

  return (
    <div className="flex flex-wrap items-center gap-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe._id);

          return (
            <RecipePreviewCard
              key={recipe._id}
              id={recipe._id}
              name={recipe.title}
              rating={recipe.rating}
              imageSrc={recipe.image || recipe.thumbnail || "/placeholder.jpg"}
              favorite={isFavorite}
            />
          );
        })
      ) : (
        <h1>No recipes found!</h1>
      )}
    </div>
  );
}

export default Home;
