const Tasks = require("../../models/Tasks");
const { ObjectId } = require("mongoose").Types;
const updateTasks = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await Tasks.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "Tasks id is not valid or Tasks not found" });
    }

    const data2 = req.body;
    const {
      task,
      dueDate,
      timeDue,
      priority,
      status,
      notes,
      mentions,
      assignees,
    } = data2;

    const data = await Tasks.findOneAndUpdate(
      { _id: ObjectId(id) },
      { task, dueDate, timeDue, priority, status, notes, mentions, assignees },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Task updated successfully", data });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = updateTasks;
