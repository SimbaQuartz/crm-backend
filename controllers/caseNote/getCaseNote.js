const NoteCase = require("../../models/caseNote");

const getAllNoteCase = async (req, res, next) => {
  try {
    const data = await NoteCase.find({ userCase: req.query.case_note }).sort({
      createdAt: -1,
    });
    const count = await NoteCase.countDocuments();
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
