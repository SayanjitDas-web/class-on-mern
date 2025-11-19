const router = require("express").Router()
const userController = require("../controllers/user.controller.js");
const auth = require("../middlewares/auth.js");

// Register
router.post("/register", userController.register);

// Login
router.post("/login", userController.login);

// Logout
router.post("/logout", auth, userController.logout);

// Get current user info (protected)
router.get("/me", auth, userController.getMe);

module.exports = router