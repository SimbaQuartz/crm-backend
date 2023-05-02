const express = require("express");
const  createProfileDetails= require("../../controllers/profileDetails/createProfileDetails");
const deleteNoticeBoard = require("../../controllers/profileDetails/deleteNoticeBoard");
const updateNoticeBoard = require("../../controllers/profileDetails/updateNoticeBoard");
const getNoticeBoard = require("../../controllers/profileDetails/getNoticeBoard");
const getAllProfileDetails = require("../../controllers/profileDetails/getAllProfileDetails");
const router = express.Router();
router.post("/create", createProfileDetails);
router.put("/:id", updateNoticeBoard);
router.delete("/:id", deleteNoticeBoard);
router.get("/:id", getNoticeBoard);
router.get("/", getAllProfileDetails);

module.exports = router;
