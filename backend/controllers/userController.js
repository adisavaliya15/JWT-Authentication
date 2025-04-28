// @desc    Get user home
// @route   GET /api/user/home
// @access  Private (User)
exports.getUserHome = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the User Dashboard",
    data: {
      user: req.user,
    },
  });
};

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private (User)
exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
