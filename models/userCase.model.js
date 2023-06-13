const { Schema, model } = require("mongoose");

const userCaseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    caseType: { type: Schema.Types.ObjectId, required: true, ref: "CaseType" },
  },
  { timestamps: true }
);

const userCase = model("userCase", userCaseSchema, "userCase");

module.exports = userCase;
