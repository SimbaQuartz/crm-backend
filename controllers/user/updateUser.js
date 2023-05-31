const User = require("../../models/user.model");
const formidable = require("formidable");
const { ObjectId } = require("mongoose").Types;
const bcrypt = require("bcryptjs");

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkId = await User.findOne({ _id: ObjectId(id) });

    if (!checkId) {
      return res
        .status(400)
        .send({ message: "User id is not valid or User not found" });
    }

    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }

      const { firstName, lastName, email, phoneNumber, siteId, role } = fields;
      //   console.log("fields", fields);
      //   if (password !== confirmPassword)
      //     return res.send({ message: "password not matching" });

      //   const salt = await bcrypt.genSalt(10);
      //   const hashPassword = await bcrypt.hash(password, salt);
      //   const hashPassword2 = await bcrypt.hash(confirmPassword, salt);

      const data = await User.findOneAndUpdate(
        { _id: ObjectId(id) },
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          siteId,
          role,
        },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "User updated successfully", data });
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
module.exports = updateUser;
