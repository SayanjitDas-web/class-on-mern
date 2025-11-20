import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import FavRecipies from "./pages/FavRecipies";
import Header from "./customComponents/Header";
import Footer from "./customComponents/Footer";
import NotFound from "./pages/NotFound";
import RecipePreview from "./pages/RecipePreview";
import ProtectedRoute from "./customComponents/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="mx-60">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/fav"
          element={
            <ProtectedRoute>
              <FavRecipies />
            </ProtectedRoute>
          }
        />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipePreview/:id" element={<RecipePreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
