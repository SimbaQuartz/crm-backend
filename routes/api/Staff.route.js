const express = require("express");
const createStaff = require("../../controllers/Staff/createStaff");
const deleteStaff = require("../../controllers/Staff/deleteStaff");
const updateStaff = require("../../controllers/Staff/updateStaff");
const getSingleStaff = require("../../controllers/Staff/getSingleStaff");
const getStaff = require("../../controllers/Staff/getStaff");

const router = express.Router();
router.post("/", createStaff);
router.get("/", getStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);
router.get("/:id", getSingleStaff);

module.exports = router;
