const uploadFiles = require("../../services/upload-files");
const ProfileDetails = require("../../models/ProfileDetails");
const formidable = require("formidable");
const createError = require("http-errors");
const { ObjectId } = require("mongoose").Types;

const getProfileDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ProfileDetails.findOne({
      _id: ObjectId(id),
    });
    if (!data) throw createError.BadRequest("Notice Board not found");
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};

module.exports = getProfileDetails;
