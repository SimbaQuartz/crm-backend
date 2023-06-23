const userModel = require("../../models/user.model");

const listUserWithCases = async (req, res) => {
  const userCaseCount = await userModel.aggregate([
    {
      $match: {
        role: "user",
      },
    },
    {
      $lookup: {
        localField: "_id",
        from: "userCase",
        foreignField: "user",
        as: "count",
      },
    },
    {
      $group: {
        _id: "$_id",
        caseCount: { $sum: { $size: "$count" } },
      },
    },
  ]);

  return res.status(200).json({
    success: true,
    userCaseCount,
  });
};

module.exports = listUserWithCases;
