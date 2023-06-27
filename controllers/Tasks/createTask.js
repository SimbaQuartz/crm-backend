const Tasks = require("../../models/CaseTasks");
const createError = require("http-errors");

const createTasks = async (req, res, next) => {
  try {
    const { assignees } = req.body;

    if (!assignees && !assignees?.length) {
      // throw createError.BadRequest(400, "At least one assignee is required.");
      return res
        .status(400)
        .send({ message: "At least one assignee is required." });
    }

    const data = new Tasks({ ...req.body, assignees });
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
