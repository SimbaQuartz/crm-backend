const User = require("../../models/user.model");

const getAllUser = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const viewSize = parseInt(req.query.viewSize) || 10;
    const data = await User.aggregate([
      { $match: { role: "user" } },
      {
        $facet: {
          count: [{ $count: "totalCount" }],
          data: [
            {
              $sort: {
                createdAt: -1,
              },
            },

            {
              $skip: startIndex,
            },
            {
              $limit: viewSize,
            },
          ],
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "User fetch successfully",
      count: data[0].count[0].totalCount,
      data: data[0].data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllUser;
