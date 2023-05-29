const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    // role: {
    //   type: String,
    //   required: true,
    // },
    // name: {
    //   type: String,
    // },
    // email: {
    //   type: String,
    //   lowercase: true,
    //   required: true,
    //   unique: true,
    // },
    // siteId: {
    //   type: String,
    //   required: true,
    // },

    // password: {
    //   type: String,
    //   required: true,
    // },

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
      required: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
    },
    siteId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema, "users");
