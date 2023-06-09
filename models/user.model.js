const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    title: {
      type: String,
      enum: ["Mr", "Miss", "Mrs"],
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: [
        "Annulled Marriage",
        "Common-Law",
        "Divorced",
        "Legally Separated",
        "Married",
        "Single/Never Married",
        "Widowed",
      ],
      required: true,
    },
    countryOfResidence: {
      type: String,
      required: true,
    },
    countryOfCitizenship: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    media: [
      {
        url: { type: String },
        type: { type: String, default: "image" },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    primaryEmail: {
      type: String,
      required: true,
      unique: true,
    },
    secondaryEmail: {
      type: String,
    },
    primaryPhone: {
      type: String,
      required: true,
      unique: true,
    },
    secondaryPhone: {
      type: String,
    },
    partnerFirstName: {
      type: String,
    },
    partnerLastName: {
      type: String,
    },
    partnerCountryOfResidence: {
      type: String,
    },
    partnerCountryOfCitizenship: {
      type: String,
    },
    partnerEmail: {
      type: String,
    },
    partnerPhone: {
      type: String,
    },
    hasChildren: {
      type: Boolean,
    },
    numberOfChildren: {
      type: Number,
    },
    childrenDetails: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    siteId: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
    },
    imageName: {
      type: String,
      required: false,
    },
    familyName: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema, "users");
