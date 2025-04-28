const express = require("express");
const router = express.Router();
const {
  getUserHome,
  getUserProfile,
} = require("../controllers/userController");
const { authenticateUser, authorizeRole } = require("../middleware/auth");

router.use(authenticateUser, authorizeRole("user"));

router.get("/home", getUserHome);
router.get("/profile", getUserProfile);

module.exports = router;
