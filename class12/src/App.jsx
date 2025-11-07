import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import FavRecipies from "./pages/FavRecipies";
import Header from "./customComponents/Header";
import Footer from "./customComponents/Footer";
import NotFound from "./pages/NotFound";
import RecipePreview from "./pages/RecipePreview";

function App() {
  
  return (
    <div className="mx-60">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<FavRecipies />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipePreview/:id" element={<RecipePreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
