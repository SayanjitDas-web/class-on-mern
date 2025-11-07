import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext({
  recipes: [],
  setRecipes: () => {},
  fetchRecipes: () => {},
  getRecipeById: () => {},
  toggleFavorite: () => {},
});

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      if (data?.recipes) {
        const enriched = data.recipes.map((r) => ({
          ...r,
          favorite: false, // new field
        }));
        setRecipes(enriched);
      }
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    }
  };

  const getRecipeById = (id) => {
    return recipes.find((recipe) => recipe.id === Number(id));
  };

  const toggleFavorite = (id) => {
    setRecipes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, favorite: !r.favorite } : r))
    );
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, fetchRecipes, getRecipeById, toggleFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
