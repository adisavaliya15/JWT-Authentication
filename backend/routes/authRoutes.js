const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/auth");
const { login, register } = require("../controllers/authController");

// Prevent authenticated users from accessing auth routes
router.post(
  "/login",
  (req, res, next) => {
    if (req.user) return res.redirect("/");
    next();
  },
  login
);

router.post(
  "/register",
  (req, res, next) => {
    if (req.user) return res.redirect("/");
    next();
  },
  register
);

module.exports = router;
