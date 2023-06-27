const { Schema, model } = require("mongoose");

const CaseNote = new Schema(
  {
    userCase: {
      type: Schema.Types.ObjectId,
      ref: "userCase",
      required: true,
    },
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
