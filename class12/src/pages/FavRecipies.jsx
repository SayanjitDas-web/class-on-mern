import { useRecipe } from "../context/recipe";
import RecipePreviewCard from "../customComponents/RecipePreviewCard";

function FavRecipies() {
  const { recipes } = useRecipe();

  return (
    <div className="flex flex-wrap items-center">
      {recipes.length !== 0 ? (
        recipes.map((recipe, i) => {
          if (recipe.favorite) {
            return (
              <RecipePreviewCard
                name={recipe.name}
                rating={recipe.rating}
                imageSrc={recipe.image}
                id={recipe.id}
                favorite={recipe.favorite}
                key={i}
              />
            );
          }
        })
      ) : (
        <h1>No recipes found!</h1>
      )}
    </div>
  );
}

export default FavRecipies;
