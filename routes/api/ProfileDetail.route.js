const express = require("express");
const createProfileDetails= require("../../controllers/profileDetails/createProfileDetails");
const deleteProfileDetails = require("../../controllers/profileDetails/deleteProfileDetails");
const updateProfileDetails = require("../../controllers/profileDetails/updateProfileDetails");
const getProfileDetails = require("../../controllers/profileDetails/getProfileDetails");
const getAllProfileDetails = require("../../controllers/profileDetails/getAllProfileDetails");

const router = express.Router();
router.post("/create", createProfileDetails);
router.put("/:id", updateProfileDetails);
router.delete("/:id", deleteProfileDetails);
router.get("/:id", getProfileDetails);
router.get("/", getAllProfileDetails);

module.exports = router;
