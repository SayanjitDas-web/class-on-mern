const router = require("express").Router()
const auth = require("../middlewares/auth.js");
const { getAllRecipes, addToFavorites, removeFromFavorites, getFavorites} = require("../controllers/recipe.controller.js")

router.get("/", getAllRecipes);
router.post("/favorite/:id", auth, addToFavorites);
router.delete("/favorite/:id", auth, removeFromFavorites);
router.get("/favorites", auth, getFavorites);

module.exports = router