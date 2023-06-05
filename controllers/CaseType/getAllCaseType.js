const CaseType = require("../../models/caseType");
const { ObjectId } = require("mongoose").Types;

const getCaseType = async (req, res, next) => {
  try {
    const data = await CaseType.find();
    res.status(200).json({
      success: true,
      message: "all case type fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getCaseType;
