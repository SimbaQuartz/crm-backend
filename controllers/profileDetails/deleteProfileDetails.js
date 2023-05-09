const ProfileDetails = require("../../models/ProfileDetails");
const { ObjectId } = require("mongoose").Types;

const deleteProfileDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProfileDetails.findOneAndDelete({
      _id: ObjectId(id),
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};

module.exports = deleteProfileDetails;
