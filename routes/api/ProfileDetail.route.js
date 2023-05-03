const express = require("express");
const  createProfileDetails= require("../../controllers/profileDetails/createProfileDetails");
const deleteProfileDetails = require("../../controllers/profileDetails/deleteProfileDetails");
const updateProfileDetails = require("../../controllers/profileDetails/updateProfileDetails");
const getNoticeBoard = require("../../controllers/profileDetails/getNoticeBoard");
const getAllProfileDetails = require("../../controllers/profileDetails/getAllProfileDetails");

const router = express.Router();
router.post("/create", createProfileDetails);
router.put("/:id", updateProfileDetails);
router.delete("/:id", deleteProfileDetails);
router.get("/:id", getNoticeBoard);
router.get("/", getAllProfileDetails);

module.exports = router;
