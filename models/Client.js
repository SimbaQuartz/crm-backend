const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    firstName: {
      type: Date,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
    },
    siteID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("client", clientSchema, "client");
