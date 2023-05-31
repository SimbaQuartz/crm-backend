const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countryCodeMedia = new Schema({
  name: { type: String },
  dialCode: { type: String },
  isoCode: { type: String },
});
const CountrySchema = new Schema({
  data: [
    {
      type: countryCodeMedia,
      required: false,
    },
  ],
});

const CountryCode = mongoose.model("countryCode", CountrySchema, "countryCode");

// make this available to our orders in our Node applications
module.exports = CountryCode;
