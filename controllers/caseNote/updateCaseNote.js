const NoteCase = require("../../models/caseNote");
const { ObjectId } = require("mongoose").Types;
const updateNoteCase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data2 = req.body;
    const { date, subject, notes } = data2;
    const data = await NoteCase.findOneAndUpdate(
      { _id: ObjectId(id) },
      { date, subject, notes },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "note case updated successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = updateNoteCase;
