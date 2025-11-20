import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

const RecipeContext = createContext({
  recipes: [],
  favorites: [],
  fetchRecipes: () => {},
  getRecipeById: () => {},
  toggleFavorite: () => {},
});

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await api.get("/recipe/");
      if (res.data?.recipes) {
        setRecipes(res.data.recipes);
      }
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await api.get("/recipe/favorites");
      if (Array.isArray(res.data)) {
        setFavorites(res.data.map((item) => item._id));
      }
    } catch (err) {
      console.error("Failed to fetch favorites:", err);
    }
  };

  const getRecipeById = (id) => {
    return recipes.find((recipe) => recipe._id === id);
  };

  const toggleFavorite = async (id) => {
    try {
      const isFav = favorites.includes(id);

      if (!isFav) {
        await api.post(`/recipe/favorite/${id}`);
      } else {
        await api.delete(`/recipe/favorite/${id}`);
      }

      fetchFavorites();
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchFavorites();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        favorites,
        fetchRecipes,
        getRecipeById,
        toggleFavorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
