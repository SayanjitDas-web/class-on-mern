import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/recipe";
import { Heart } from "lucide-react";

function RecipePreviewCard({name,rating,imageSrc,id,favorite}) {
  const { toggleFavorite } = useRecipe()
  return (
    <Card className="w-60 m-2">
      <CardContent>
        <img src={imageSrc} alt={name} />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{rating}</CardDescription>
        <Link to={`/recipePreview/${id}`}>Preview</Link>
        <Link to={`/recipe/${id}`}>See more</Link>
        <Heart onClick={() => toggleFavorite(id)} fill={favorite ? "red" : "transparent"} />
      </CardFooter>
    </Card>
  );
}

export default RecipePreviewCard;