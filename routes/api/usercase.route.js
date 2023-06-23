const addUserCase = require("../../controllers/userCases/addUserCase");
const userCaseList = require("../../controllers/userCases/userCaseList");
const router = require("express").Router();

router.post("/create", addUserCase);
router.get("/get/user/caseList", userCaseList);

module.exports = router;
