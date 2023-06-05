const newCase = require("../../models/newCase.model");

const createNewCase = async (req, res, next) => {
  try {
    const {
      email,
      givenNames,
      familyName,
      caseType,
      dateOfBirth,
      access,
      userId,
    } = req.body;
    const data = new newCase({
      email,
      givenNames,
      caseType,
      dateOfBirth,
      access,
      familyName,
      userId,
    });
    await data.save();
    res.status(200).json({
      success: true,
      message: "new case created successfully",
      data: data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createNewCase;
