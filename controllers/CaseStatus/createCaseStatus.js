const CaseStatus = require("../../models/caseStatus");

const createCaseStatus = async (req, res, next) => {
  try {
    const { caseStatus } = req.body;
    const data = new CaseStatus({
      caseStatus,
    });
    await data.save();
    res.status(200).json({
      success: true,
      message: "case status created successfully",
      data: data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createCaseStatus;