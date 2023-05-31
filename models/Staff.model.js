const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    countryCode: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("staff", staffSchema, "staff");
