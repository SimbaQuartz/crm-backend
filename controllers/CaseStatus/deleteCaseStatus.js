const CaseStatus = require("../../models/caseStatus");
const { ObjectId } = require("mongoose").Types;

const deleteCaseStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await CaseStatus.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({
          message: "CaseStatus id is not valid or CaseStatus not found",
        });
    }

    const data = await CaseStatus.findOneAndDelete({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "Case Status deleted successfully" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = deleteCaseStatus;