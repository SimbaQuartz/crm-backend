const userCaseModel = require("../../models/userCase.model");
const { ObjectId } = require("mongoose").Types;
const userModel = require("../../models/user.model");

const userCaseList = async (req, res) => {
  const { user_id } = req.params;
  const user_data = await userModel.findOne({ _id: ObjectId(user_id) });
  const userCaseList = await userCaseModel.aggregate([
    {
      $match: {
        user: ObjectId(user_id),
      },
    },

    {
      $lookup: {
        localField: "caseType",
        from: "CaseType",
        foreignField: "_id",
        as: "case_data",
      },
    },
    { $unwind: "$case_data" },
    {
      $project: {
        case_data: 1,
      },
    },
  ]);
  const response = { ...user_data?._doc, case_list: userCaseList };
  return res.status(200).json({
    success: true,
    message: "Get user cases list successfully.",
    response,
  });
};

module.exports = userCaseList;
