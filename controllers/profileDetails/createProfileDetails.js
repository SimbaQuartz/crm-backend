const uploadFiles = require("../../services/upload-files");
const ProfileDetails = require("../../models/ProfileDetails");
const formidable = require("formidable");
const createError = require("http-errors");

const createProfileDetails = async (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      console.log(files);
      if (err) {
        res.status(400);
        res.send(err);
      }

      let { title, firstName, lastName, maritalStatus, countryOfResidence, countryOfCitizenship,dateOfBirth,address,primaryEmail,secondayrEmail,primaryPhone,secondaryPhone,partnerFirstName,partnerLastName,partnerCountryOfResidence,partnerCountryOfCitizenship,partnerEmail,partnerPhone,hasChildren,numberOfChildren,childrenDetails,imageName
      } = fields;

      // upload files to s3
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

      console.log(allFileUploadedArray[0]);

      const profileDetails = new ProfileDetails({
        // media: allFileUploadedArray,
        media: allFileUploadedArray,
        title, firstName, lastName, maritalStatus, countryOfResidence, countryOfCitizenship,dateOfBirth,address,primaryEmail,secondayrEmail,primaryPhone,secondaryPhone,partnerFirstName,partnerLastName,partnerCountryOfResidence,partnerCountryOfCitizenship,partnerEmail,partnerPhone,hasChildren,numberOfChildren,childrenDetails,imageName
      });

      // Save post to DB
      await profileDetails.save();

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

module.exports = createProfileDetails;
