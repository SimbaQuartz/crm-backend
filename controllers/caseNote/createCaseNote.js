const caseNote = require("../../models/caseNote");

const createCaseNote = async (req, res, next) => {
  try {
    const data = new caseNote(req.body);
    await data.save();
    res
      .status(200)
      .json({ success: true, data, message: "note case created successfully" });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createCaseNote;
