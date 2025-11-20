import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/recipe";
import { Heart, Star } from "lucide-react";

function RecipePreviewCard({ name, rating, imageSrc, id, favorite }) {
  const { toggleFavorite } = useRecipe();

  const handleFavorite = (e) => {
    e.preventDefault(); // prevents navigation when clicking heart
    toggleFavorite(id);
  };

  return (
    <Card className="w-60 m-2 shadow-md hover:shadow-lg transition-all duration-200">
      <CardContent className="p-2">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
      </CardContent>

      <CardFooter className="flex-col items-start gap-2">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="truncate">{name}</CardTitle>

          {/* Favorite Button */}
          <button onClick={handleFavorite}>
            <Heart
              stroke="red"
              fill={favorite ? "red" : "transparent"}
              className={`h-6 w-6 cursor-pointer transition-all ${
                favorite ? "scale-110" : "scale-100"
              }`}
            />
          </button>
        </div>

        <CardDescription className="text-lg font-medium">
          <Star /> {rating ?? "No rating"}
        </CardDescription>

        <div className="flex flex-col gap-1 mt-2">
          <Link
            to={`/recipePreview/${id}`}
            className="text-blue-600 underline underline-offset-4"
          >
            Preview
          </Link>

          <Link
            to={`/recipe/${id}`}
            className="text-blue-600 underline underline-offset-4"
          >
            See more
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default RecipePreviewCard;
