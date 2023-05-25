const { Schema, model } = require("mongoose");

// const newArray = new Schema({
//   type: String,
// });

const TasksSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    timeDue: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["High", "Med", "Low"],
    },
    status: {
      type: String,
      enum: ["in_process", "completed"],
    },
    mentions: [
      {
        type: String,
      },
    ],
    assignees: [
      {
        type: String,
        required: true,
      },
    ],
    // assignees: {
    //   type: Array,
    //   required: true,
    //   items: {
    //     type: String,
    //   },
    // },
    notes: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = model("Tasks", TasksSchema, "Tasks");
