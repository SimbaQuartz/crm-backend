const express = require("express");

const createCaseStatus = require("../../controllers/CaseStatus/createCaseStatus");
const getCaseStatus = require("../../controllers/CaseStatus/getAllCaseStatus");
const getSingleCaseStatus = require("../../controllers/CaseStatus/getSingleCaseStatus");
const updateCaseStatus = require("../../controllers/CaseStatus/updateCaseStatus");
const deleteCaseStatus = require("../../controllers/CaseStatus/deleteCaseStatus");

const router = express.Router();
router.post("/", createCaseStatus);
router.get("/", getCaseStatus);
router.get("/:id", getSingleCaseStatus);
router.put("/:id", updateCaseStatus);
router.delete("/:id", deleteCaseStatus);

module.exports = router;