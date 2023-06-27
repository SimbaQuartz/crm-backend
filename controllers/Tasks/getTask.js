const Tasks = require("../../models/CaseTasks");

const getAllTasks = async (req, res, next) => {
  try {
    const data = await Tasks.find().sort({ createdAt: -1 });
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
