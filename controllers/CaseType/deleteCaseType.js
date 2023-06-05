const CaseType = require("../../models/caseType");
const { ObjectId } = require("mongoose").Types;

const deleteCaseType = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await CaseType.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({ message: "CaseType id is not valid or CaseType not found" });
    }

    const data = await CaseType.findOneAndDelete({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "case type deleted successfully" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = deleteCaseType;
