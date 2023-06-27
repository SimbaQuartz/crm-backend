const NoteCase = require("../../models/caseNote");
const { ObjectId } = require("mongoose").Types;

const getAllNoteCase = async (req, res, next) => {
  try {
    const { case_note } = req.query;
    console.log("case_note", case_note);
    const data = await NoteCase.find({
      userCase: ObjectId(case_note),
    }).sort({
      createdAt: -1,
    });
    const count = await NoteCase.countDocuments({
      userCase: ObjectId(case_note),
    });
    res.status(200).json({
      success: true,
      message: "note case fetch successfully",
      count: count,
      data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllNoteCase;
