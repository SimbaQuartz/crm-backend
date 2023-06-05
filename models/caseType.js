const { Schema, model } = require("mongoose");

const CaseType = new Schema(
  {
    caseType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("CaseType", CaseType, "CaseType");
