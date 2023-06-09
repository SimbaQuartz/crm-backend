const User = require("../../models/user.model");
const formidable = require("formidable");
const { ObjectId } = require("mongoose").Types;
const uploadFiles = require("../../services/upload-files");

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
        media,
      } = fields;

      // upload files to s3`
      const filesArray = Object.values(files);
      let updateDataObject = {
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
      };
      if (media !== "") {
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
        updateDataObject = {
          updateDataObject,
          ...{ media: allFileUploadedArray },
        };
      } else {
        updateDataObject = {
          updateDataObject,
          ...{ media: checkId.media },
        };
      }

      const data = await User.findOneAndUpdate(
        { _id: ObjectId(id) },
        updateDataObject,
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
