const express = require("express");
const createNewCaseData = require("../../controllers/newCase/createNewCaseData");
const deleteNewCase = require("../../controllers/newCase/deleteNewCase");
const getAllNewCase = require("../../controllers/newCase/getAllNewCase");
const router = express.Router();

router.delete("/:id",deleteNewCase)
router.post("/add", createNewCaseData);
router.get("/", getAllNewCase)
module.exports = router;