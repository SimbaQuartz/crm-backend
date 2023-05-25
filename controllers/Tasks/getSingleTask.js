const Tasks = require("../../models/Tasks");
const { ObjectId } = require("mongoose").Types;
const getSingleTasks = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await Tasks.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      res.send({ message: "Tasks id is not valid or Tasks not found" });
    }

    const data = await Tasks.findOne({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "Tasks fetch successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = getSingleTasks;
