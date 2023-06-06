const User = require("../../models/user.model");
const createError = require("http-errors");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const uploadFiles = require("../../services/upload-files");

const createUser = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }
      const {
        title,
        maritalStatus,
        countryOfResidence,
        countryOfCitizenship,
        dateOfBirth,
        address,
        primaryEmail,
        secondayrEmail,
        primaryPhone,
        secondaryPhone,
        partnerFirstName,
        partnerLastName,
        partnerCountryOfResidence,
        partnerCountryOfCitizenship,
        partnerEmail,
        partnerPhone,
        hasChildren,
        numberOfChildren,
        childrenDetails,
        firstName,
        lastName,
        email,
        phoneNumber,
        siteId,
        password,
        confirmPassword,
        role,
        imageName,
      } = fields;

      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.status(409).send({ message: "email already exists" });
      }

      // const checkSiteId = await User.findOne({ siteId: siteId });
      // if (checkSiteId) {
      //   return res.status(409).send({ message: "siteId already exists" });
      // }

      const checkMobile = await User.findOne({
        phoneNumber: phoneNumber,
      });
      if (checkMobile) {
        return res.status(409).send({ message: "phone no. already exists" });
      }

      if (password !== confirmPassword)
        return res.status(400).send({ message: "password not matching" });

      // upload files to s3`
      const filesArray = Object.values(files);
      const allFileUploadedArray = await Promise.all(
        filesArray?.map(async (item) => {
          let location = item.path;
          const originalFileName = item.name;
          const fileType = item.type;
          // uploads file.
          const data = await uploadFiles.upload(
            location,
            originalFileName,
            "post/",
            null
          );
          return {
            url: data.Location,
            type: fileType,
          };
        })
      );
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const hashPassword2 = await bcrypt.hash(confirmPassword, salt);

      const data = await User.create({
        media: allFileUploadedArray,
        title,
        maritalStatus,
        countryOfResidence,
        countryOfCitizenship,
        dateOfBirth,
        address,
        primaryEmail,
        secondayrEmail,
        primaryPhone,
        secondaryPhone,
        partnerFirstName,
        partnerLastName,
        partnerCountryOfResidence,
        partnerCountryOfCitizenship,
        partnerEmail,
        partnerPhone,
        hasChildren,
        numberOfChildren,
        childrenDetails,
        firstName,
        lastName,
        email,
        phoneNumber,
        siteId,
        password: hashPassword,
        role,
        imageName,
        confirmPassword: hashPassword2,
      });

      return res
        .status(200)
        .json({ success: true, data, message: "User created successfully" });
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
module.exports = createUser;
