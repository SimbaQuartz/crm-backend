const express = require("express");
const createNewCase = require("../../controllers/newCase/createNewCase");
const deleteNewCase = require("../../controllers/newCase/deleteNewCase");
const getAllNewCase = require("../../controllers/newCase/getAllNewCase");
const router = express.Router();

router.delete("/:id",deleteNewCase)
router.post("/add", createNewCase);
router.get("/", getAllNewCase)
module.exports = router;