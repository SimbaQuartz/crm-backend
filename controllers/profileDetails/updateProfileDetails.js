const uploadFiles = require("../../services/upload-files");
const ProfileDetails = require("../../models/ProfileDetails");
const formidable = require("formidable");
const createError = require("http-errors");
const { isValidObjectId } = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const updateProfileDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(400);
        res.send(err);
      }

      let {
        title,
        firstName,
        lastName,
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
        imageName,
      } = fields;

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

      const payload = {
        title,
        firstName,
        lastName,
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
        imageName,
      };
      if (allFileUploadedArray.length) {
        payload.media = allFileUploadedArray;
      }

      const profileDetails = await ProfileDetails.findOneAndUpdate(
        {
          _id: Object(id),
        },
        payload,
        { new: true }
      );

      // Save post to DB

      res.status(200).json({
        success: true,
        data: profileDetails,
      });
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};

module.exports = updateProfileDetails;
