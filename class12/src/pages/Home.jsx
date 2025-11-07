import { useState, useEffect } from "react";
import RecipePreviewCard from "../customComponents/RecipePreviewCard";
import { useRecipe } from "../context/recipe";

function Home() {
  const { recipes } = useRecipe()
  return (
    <div className="flex flex-wrap items-center">
      {recipes.length !== 0 ? (
        recipes.map((recipe, i) => {
          return (
            <RecipePreviewCard
              name={recipe.name}
              rating={recipe.rating}
              imageSrc={recipe.image}
              id = {recipe.id}
              favorite = {recipe.favorite}
              key={i}
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
