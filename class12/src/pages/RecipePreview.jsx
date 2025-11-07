import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RecipePreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      data ? setRecipe(data) : setRecipe({});
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    id ? fetchRecipe(id) : setRecipe({});
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return recipe ? (
    <div>
      <h1 className="momo-signature-regular text-4xl py-6 text-center">
        Teast this yummy <span className="font-bold underline underline-offset-6">{recipe.cuisine}</span> cuisine
      </h1>
      <div className="w-full h-[400px] overflow-hidden rounded-xl my-4">
        <img src={recipe.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <h1 className="text-2xl font-medium">Ingredient:</h1>
        {recipe.ingredients.map((ingredient) => {
          return <h1 className="text-lg text-slate-800">{ingredient}</h1>;
        })}
      </div>
      <h1 className="text-center text-4xl py-4">Make the dish in <span className="font-bold">{recipe.cookTimeMinutes} mini</span></h1>
    </div>
  ) : (
    <h1>no preview available</h1>
  );
}

export default RecipePreview;
