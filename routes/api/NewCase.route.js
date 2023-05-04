const express = require("express");
const createNewCase =require("../../controllers/newCase/createNewcase");
const router = express.Router();

router.post("/add", createNewCase);
module.exports = router;