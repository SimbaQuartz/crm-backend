const { Schema, model } = require("mongoose");

const formCategories = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentField: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "formParent",
    },
  },
  { timestamps: true }
);

module.exports = model("formCategories", formCategories, "formCategories");
