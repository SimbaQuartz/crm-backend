const NoteCase = require("../../models/caseNote");
const { ObjectId } = require("mongoose").Types;
const getSingleNoteCase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await NoteCase.findOne({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "note case fetch successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getSingleNoteCase;
