const User = require("../../models/user.model");

const getAllUser = async (req, res, next) => {
  try {
    const data = await User.find({ role: "user" });
    const count = await User.countDocuments({ role: "user" });
    res.status(200).json({
      success: true,
      message: "User fetch successfully",
      count: count,
      data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllUser;
