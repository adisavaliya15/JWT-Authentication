const User = require("../models/User");

// @desc    Get admin home
// @route   GET /api/admin/home
// @access  Private (Admin)
exports.getAdminHome = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Admin Dashboard",
    data: {
      user: req.user,
    },
  });
};

// @desc    Get admin services
// @route   GET /api/admin/services
// @access  Private (Admin)
exports.getAdminServices = async (req, res, next) => {
  try {
    // Example: Get all users (admin can see all users)
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};
