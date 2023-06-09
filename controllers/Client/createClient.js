const Client = require("../../models/Client");
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

      const { firstName, lastName, email, phoneNumber, siteID, password } =
        fields;

      const checkEmail = await Client.findOne({ email: email });

      if (checkEmail) {
        return res.status(400).send({ message: "email already exists" });
      }

      //   const checkMobile = await StaffModel.findOne({
      //     phoneNumber: phoneNumber,
      //   });

      //   if (checkMobile) {
      //     return res.send({ message: "phone no. already exists" });
      //   }

      const data = Client({
        firstName,
        lastName,
        email,
        phoneNumber,
        siteID,
        password,
      });
      await data.save();
      res
        .status(200)
        .json({ success: true, data, message: "Client created successfully" });
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createStaff;
