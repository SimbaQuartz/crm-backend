const { Schema, model } = require("mongoose");

const formSubCategories = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryField: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "formCategories",
    },
  },
  { timestamps: true }
);

module.exports = model(
  "formSubCategories",
  formSubCategories,
  "formSubCategories"
);
