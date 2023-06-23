const addUserCase = require("../../controllers/userCases/addUserCase");
const listUserWithCases = require("../../controllers/userCases/listUserWithCases");
const userCaseList = require("../../controllers/userCases/userCaseList");
const router = require("express").Router();

router.post("/create", addUserCase);
router.get("/get/user/caseList/:user_id", userCaseList);
router.get("/user/list/cases", listUserWithCases);

module.exports = router;
