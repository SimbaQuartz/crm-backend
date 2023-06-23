const formParentModel = require("../../models/formModel/formParent");

const listFormToShow = async (req, res) => {
  const response = await formParentModel.aggregate([
    {
      $match: {},
    },
    {
      $lookup: {
        from: "formCategories",
        let: { yourField: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$parentField", "$$yourField"],
              },
            },
          },
          {
            $lookup: {
              localField: "_id",
              from: "formSubCategories",
              foreignField: "categoryField",
              as: "sub_categories",
            },
          },
        ],
        as: "categories",
      },
    },
  ]);
  return res.status(200).json({
    success: true,
    message: "Data getting successfully.",
    response,
  });
};

module.exports = listFormToShow;
