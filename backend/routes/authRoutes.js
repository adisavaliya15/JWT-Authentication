const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/auth");
const { register, login, getMe } = require("../controllers/authController");

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

router.get("/me", authenticateUser, getMe);
module.exports = router;
