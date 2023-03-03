const express = require("express");
const authController = require("../controllers/auth.controller");
const isAuth = require("../middlewares/is-auth");
const router = express.Router();

// Login
router.post("/login", authController.login);

// Signup
router.post("/signup", authController.signup);

// Get profile
router.get("/user", isAuth, authController.getUser);

// Edit profile
router.put("/user");

module.exports = router;
