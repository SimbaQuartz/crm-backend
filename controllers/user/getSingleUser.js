const User = require("../../models/user.model");
const { ObjectId } = require("mongoose").Types;
const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await User.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "User id is not valid or User not found" });
    }

    const data = await User.findOne({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "User fetch successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getSingleUser;
