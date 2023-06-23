const { Schema, model } = require("mongoose");

const formParentSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("formParent", formParentSchema, "formParent");
