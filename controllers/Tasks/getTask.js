const Tasks = require("../../models/Tasks");

const getAllTasks = async (req, res, next) => {
  try {
    const data = await Tasks.find();
    const count = await Tasks.countDocuments();
    res.status(200).json({
      success: true,
      message: "Tasks fetch successfully",
      count: count,
      data,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getAllTasks;
