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
      console.log(fields, "fields");
      const {
        title,
        maritalStatus,
        countryOfResidence,
        countryOfCitizenship,
        dateOfBirth,
        address,
        primaryEmail,
        secondaryEmail,
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
        siteId,
        role,
        imageName,
      } = fields;

      const checkEmail = await User.findOne({ primaryEmail: primaryEmail });
      if (checkEmail) {
        return res.status(409).send({ message: "email already exists" });
      }
      const checkMobile = await User.findOne({
        primaryPhone: primaryPhone,
      });
      if (checkMobile) {
        return res.status(409).send({ message: "phone no. already exists" });
      }
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
      const data = await User.create({
        media: allFileUploadedArray,
        title,
        maritalStatus,
        countryOfResidence,
        countryOfCitizenship,
        dateOfBirth,
        address,
        primaryEmail,
        secondaryEmail,
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
        siteId,
        role,
        imageName,
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
