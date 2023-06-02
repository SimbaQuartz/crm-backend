const newCase = require("../../models/newCase.model");
const { ObjectId } = require("mongoose").Types;

const createNewCase = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { email, givenNames, familyName, caseType, dateOfBirth, access } =
      req.body;

    const checkId = await newCase.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res
        .status(400)
        .send({ message: "NewCase id is not valid or NewCase not found" });
    }

    const data = await newCase.findOneAndUpdate(
      { _id: ObjectId(id) },
      {
        email,
        givenNames,
        caseType,
        dateOfBirth,
        access,
        familyName,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "new case updated successfully",
      data: data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createNewCase;
