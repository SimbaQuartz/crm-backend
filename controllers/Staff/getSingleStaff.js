const Staff = require("../../models/Staff.model");
const { ObjectId } = require("mongoose").Types;
const getSingleStaff = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await Staff.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "Staff id is not valid or Staff not found" });
    }

    const data = await Staff.findOne({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "Staff fetch successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getSingleStaff;
