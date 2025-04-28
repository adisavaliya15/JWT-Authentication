const express = require("express");
const router = express.Router();
const {
  getAdminHome,
  getAdminServices,
} = require("../controllers/adminController");
const { authenticateUser, authorizeRole } = require("../middleware/auth");

router.use(authenticateUser, authorizeRole("admin"));

router.get("/home", getAdminHome);
router.get("/services", getAdminServices);

module.exports = router;
