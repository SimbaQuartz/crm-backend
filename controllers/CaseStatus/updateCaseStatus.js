const CaseStatus = require("../../models/caseStatus");
const { ObjectId } = require("mongoose").Types;

const updateCaseStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { caseStatus } = req.body;
    const checkId = await CaseStatus.findOne({ _id: ObjectId(id) });
    if (!checkId) {
      res.status(400).send({
        message: "CaseStatus id is not valid or CaseStatus not found ",
      });
    }
    const data = await CaseStatus.findOneAndUpdate(
      { _id: ObjectId(id) },
      { caseStatus },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Case Status Updated Successfully",
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

module.exports = updateCaseStatus;