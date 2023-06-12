const { Schema, model } = require("mongoose");

const CaseStatus = new Schema(
  {
    caseStatus: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("CaseStatus", CaseStatus, "CaseStatus");