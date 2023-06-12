const CaseStatus = require("../../models/caseStatus");
const { ObjectId } = require("mongoose").Types;

const getCaseStatus = async (req, res, next) => {
  try {
    const data = await CaseStatus.find();
    res.status(200).json({
      success: true,
      message: "all case status fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getCaseStatus;