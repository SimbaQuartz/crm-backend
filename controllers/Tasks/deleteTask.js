const Tasks = require("../../models/Tasks");
const { ObjectId } = require("mongoose").Types;

const deleteTasks = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await Tasks.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "Tasks id is not valid or Tasks not found" });
    }

    const data = await Tasks.findOneAndDelete({ _id: ObjectId(id) });
    res
      .status(200)
      .json({ success: true, message: "Tasks deleted successfully" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = deleteTasks;
