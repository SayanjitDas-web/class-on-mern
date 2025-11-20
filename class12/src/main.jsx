import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/recipe";
import { AuthProvider } from "./context/auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecipeProvider>
    </AuthProvider>
  </StrictMode>
);
