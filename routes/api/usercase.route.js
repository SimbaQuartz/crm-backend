const addUserCase = require("../../controllers/userCases/addUserCase");
const deleteUserCase = require("../../controllers/userCases/deleteUserCase");
const listUserWithCases = require("../../controllers/userCases/listUserWithCases");
const userCaseList = require("../../controllers/userCases/userCaseList");
const router = require("express").Router();

router.post("/create", addUserCase);
router.get("/get/user/caseList/:user_id", userCaseList);
router.get("/user/list/cases", listUserWithCases);
router.delete("/delete/case/:id", deleteUserCase);

module.exports = router;
