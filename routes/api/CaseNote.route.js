const express = require("express");
const createCaseNote = require("../../controllers/caseNote/createCaseNote");
const deleteCaseNote = require("../../controllers/caseNote/deleteCaseNote");
const updateCaseNote = require("../../controllers/caseNote/updateCaseNote");
const getSingleCaseNote = require("../../controllers/caseNote/getSingleCaseNote");
const getCaseNote = require("../../controllers/caseNote/getCaseNote");

const router = express.Router();
router.post("/", createCaseNote);
router.get("/", getCaseNote);
router.put("/:id", updateCaseNote);
router.delete("/:id", deleteCaseNote);
router.get("/:id", getSingleCaseNote);

module.exports = router;
