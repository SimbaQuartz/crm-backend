const CaseType = require("../../models/caseType");
const { ObjectId } = require("mongoose").Types;

const updateCaseType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { caseType } = req.body;
    const checkId = await CaseType.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({ message: "CaseType id is not valid or CaseType not found" });
    }

    const data = await CaseType.findOneAndUpdate(
      { _id: ObjectId(id) },
      { caseType },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "case type updated successfully",
        data: data,
      });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = updateCaseType;
