const Tasks = require("../../models/Tasks");
const createError = require("http-errors");

const createTasks = async (req, res, next) => {
  try {
    const {
      task,
      dueDate,
      timeDue,
      priority,
      status,
      notes,
      mentions,
      assignees,
    } = req.body;

    if (!assignees && !assignees?.length) {
      throw createError.BadRequest("At least one assignee is required.");
    }
    const data = new Tasks({
      task,
      dueDate,
      timeDue,
      priority,
      status,
      notes,
      mentions,
      assignees,
    });
    await data.save();
    res
      .status(200)
      .json({ success: true, data, message: "Task created successfully" });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createTasks;
