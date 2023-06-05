const CaseType = require("../../models/caseType");

const createCaseType = async (req, res, next) => {
  try {
    const { caseType } = req.body;
    const data = new CaseType({
      caseType,
    });
    await data.save();
    res.status(200).json({
      success: true,
      message: "case type created successfully",
      data: data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createCaseType;
