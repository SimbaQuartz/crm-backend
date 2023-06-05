const { Schema, model } = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const newCase = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },

    givenNames: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    caseType: {
      type: String,
      // enum: [
      //     "canadianExperienceClass",
      //     "familySponserShip",
      //     "fedralSkilledWorkers",
      //     "humanitarian&CompassionatesCases",
      //     "investors,enterprenures&SelfEmployed",
      //     "provincialNominees",
      //     "refugees",
      //     "skilledTradesWorkers",
      //     "temporaryForeignWorkers"
      //   ],
      required: true,
    },

    dateOfBirth: {
      type: Date,
    },
    access: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("newCase", newCase, "newCase");
