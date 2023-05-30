const StaffModel = require("../../models/Staff.model");
const createError = require("http-errors");
const formidable = require("formidable");

const createStaff = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }

      const {
        title,
        firstName,
        lastName,
        email,
        password,
        countryCode,
        phoneNumber,
        gender,
        street,
        city,
        pinCode,
        country,
      } = fields;

      const checkEmail = await StaffModel.findOne({ email: email });

      if (checkEmail) {
        return res.status(409).send({ message: "email already exists" });
      }

      const checkMobile = await StaffModel.findOne({
        phoneNumber: phoneNumber,
      });

      if (checkMobile) {
        return res.status(409).send({ message: "phone no. already exists" });
      }

      const data = StaffModel({
        title,
        firstName,
        lastName,
        email,
        password,
        countryCode,
        phoneNumber,
        gender,
        street,
        city,
        pinCode,
        country,
      });
      await data.save();
      res
        .status(200)
        .json({ success: true, data, message: "Staff created successfully" });
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createStaff;
