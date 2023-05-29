const Staff = require("../../models/Staff.model");

const getAllStaff = async (req, res, next) => {
  try {
    const data = await Staff.find();
    const count = await Staff.countDocuments();
    res.status(200).json({
      success: true,
      message: "Staff fetch successfully",
      count: count,
      data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllStaff;
