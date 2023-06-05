const NewCase = require("../../models/newCase.model");

const getAllNewCase = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const viewSize = parseInt(req.query.viewSize) || 10;
    const searchCriteria = {};

    const data = await NewCase.aggregate([
      {
        $facet: {
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
          count: [{ $count: "totalCount" }],
        },
      },
    ]);

    if (!data) throw createError.BadRequest("case not found");
    res.status(200).json({
      success: true,
      data: data[0]?.data,
      count: data[0]?.count[0]?.totalCount,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = getAllNewCase;
