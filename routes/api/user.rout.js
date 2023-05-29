const router = require("express").Router();
const validateAccessToken = require("../../middlewares/jwtValidation");
const getUser = require("../../controllers/user/getUser");
const createUser = require("../../controllers/user/createUser");
const deleteUser = require("../../controllers/user/deleteUser");
const updateUser = require("../../controllers/user/updateUser");
const getAllUser = require("../../controllers/user/getAllUser");
const getSingleUser = require("../../controllers/user/getSingleUser");

router.get("/me", validateAccessToken, getUser);

router.post("/", createUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getSingleUser);

module.exports = router;
