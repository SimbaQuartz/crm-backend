const express = require("express");
const  createProfileDetails= require("../../controllers/profileDetails/createProfileDetails");
const deleteNoticeBoard = require("../../controllers/profileDetails/deleteNoticeBoard");
const updateNoticeBoard = require("../../controllers/profileDetails/updateNoticeBoard");
const getNoticeBoard = require("../../controllers/profileDetails/getNoticeBoard");
const getAllNoticeBoard = require("../../controllers/profileDetails/getAllNoticeBoard");
const router = express.Router();
router.post("/create", createProfileDetails);
router.put("/:id", updateNoticeBoard);
router.delete("/:id", deleteNoticeBoard);
router.get("/:id", getNoticeBoard);
router.get("/", getAllNoticeBoard);

module.exports = router;
