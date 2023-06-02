const NewCase = require("../../models/newCase.model");
const { ObjectId } = require("mongoose").Types;

const deleteNewCase = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await NewCase.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({ message: "NewCase id is not valid or NewCase not found" });
    }

    const data = await NewCase.findOneAndDelete({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "new case deleted successfully" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = deleteNewCase;
