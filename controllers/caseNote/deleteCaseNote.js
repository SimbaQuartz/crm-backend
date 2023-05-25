const NoteCase = require("../../models/caseNote");
const { ObjectId } = require("mongoose").Types;

const deleteNoteCase = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await NoteCase.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res.send({ message: "Note Case id is not valid or Note Case not found" });
    }

    const data = await NoteCase.findOneAndDelete({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "note case deleted successfully" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = deleteNoteCase;
