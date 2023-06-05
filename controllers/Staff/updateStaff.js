const Staff = require("../../models/Staff.model");
const formidable = require("formidable");
const { ObjectId } = require("mongoose").Types;
const updateStaff = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await Staff.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "Staff id is not valid or Staff not found" });
    }

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

      // const checkEmail = await Staff.findOne({ email: email });

      // if (checkEmail) {
      //   return res.status(409).send({ message: "email already exists" });
      // }

      const data = await Staff.findOneAndUpdate(
        { _id: ObjectId(id) },
        {
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
        },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "Staff updated successfully", data });
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = updateStaff;
