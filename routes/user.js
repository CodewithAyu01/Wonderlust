const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// Signup form
router.get("/signup", userController.renderSignupForm);

// Signup user
router.post("/signup", wrapAsync(userController.signup));

// Login form
router.get("/login", userController.renderLoginForm);

// Login user
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
  userController.login
);

// Logout
router.get("/logout", userController.logout);

module.exports = router;
