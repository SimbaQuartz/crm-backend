const StaffModel = require("../../models/Staff.model");

const getAllStaff = async (req, res, next) => {
  //   try {
  //     const data = await StaffModel.find();
  //     const count = await StaffModel.countDocuments();
  // res.status(200).json({
  //   success: true,
  //   message: "Staff fetch successfully",
  //   count: count,
  //   data,
  // });
  //   } catch (error) {
  //     console.log("error", error);
  //     next(error);
  //   }
  // };
  try {
    const { query: { keyword } = { keyword: "" } } = req;

    const startIndex =
      (req.query.startIndex && parseInt(req.query.startIndex)) || 0;
    const viewSize = (req.query.viewSize && parseInt(req.query.viewSize)) || 10;

    const searchCriteria = {};

    if (keyword) {
      searchCriteria["$or"] = [
        { firstName: { $regex: `^${keyword.trim()}`, $options: "i" } },
        { lastName: { $regex: `^${keyword.trim()}`, $options: "i" } },
        { email: { $regex: `^${keyword.trim()}`, $options: "i" } },
      ];
    }

    const staffData = await StaffModel.aggregate([
      { $match: searchCriteria },
      {
        $facet: {
          data: [
            { $sort: { createdAt: -1 } },
            { $skip: startIndex },
            {
              $limit: viewSize,
            },
          ],
          count: [
            {
              $count: "total",
            },
          ],
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Staff fetch successfully",
      count: staffData[0]?.count[0]?.total,
      data: staffData[0]?.data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllStaff;
