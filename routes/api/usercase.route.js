const addUserCase = require("../../controllers/userCases/addUserCase");
const router = require("express").Router();

router.post("/create", addUserCase);

module.exports = router;
