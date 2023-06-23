const userCaseModel = require("../../models/userCase.model");

const addUserCase = async (req, res) => {
  try {
    const { userId, caseId } = req.body;
    const findAlreadyCase = await userCaseModel.find({
      user: userId,
      caseType: caseId,
    });
    if (findAlreadyCase.length !== 0) {
      return res.status(404).json({
        success: false,
        message: "This case already exists with this users.",
      });
    }
    const userNewCase = await userCaseModel.create({
      user: userId,
      caseType: caseId,
    });

    res.status(200).json({
      success: true,
      message: "Case created successfully.",
      created: userNewCase,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "user and case id required.",
    });
  }
};

module.exports = addUserCase;
