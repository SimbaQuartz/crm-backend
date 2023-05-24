const { Schema, model } = require("mongoose");

const CaseNote = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    subject: {
      type: String,
    },
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("CaseNote", CaseNote, "CaseNote");
