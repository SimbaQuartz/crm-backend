const caseStatus = require("../../models/caseStatus");
const { ObjectId } = require("mongoose").Types;
const getSingleCaseStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await caseStatus.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({ message: "CaseStatus id is not valid or CaseType not found" });
    }
    const data = await caseStatus.findOne({ _id: ObjectId(id) });
    res.status(200).json({
      success: true,
      message: "case status  fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getSingleCaseStatus;