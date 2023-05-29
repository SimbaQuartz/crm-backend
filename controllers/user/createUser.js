const User = require("../../models/user.model");
const createError = require("http-errors");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");

const createUser = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }

      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        siteId,
        password,
        role,
        confirmPassword,
      } = fields;

      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.send({ message: "email already exists" });
      }

      const checkSiteId = await User.findOne({ siteId: siteId });
      if (checkSiteId) {
        return res.send({ message: "siteId already exists" });
      }

      const checkMobile = await User.findOne({
        phoneNumber: phoneNumber,
      });
      if (checkMobile) {
        return res.send({ message: "phone no. already exists" });
      }

      if (password !== confirmPassword)
        return res.send({ message: "password not matching" });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const hashPassword2 = await bcrypt.hash(confirmPassword, salt);

      const data = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        siteId,
        password: hashPassword,
        role,
        confirmPassword: hashPassword2,
      });

      res
        .status(200)
        .json({ success: true, data, message: "User created successfully" });
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createUser;
