const router = require("express").Router();

const authRoutes = require("./Auth.route");

const validateAccessToken = require("../../middlewares/jwtValidation");
const user = require("./user.rout");
const getCountryCode = require("../../controllers/CountryCode/CountryCode");
const ProfileDetails = require("./ProfileDetail.route.js");
const CaseNote = require("./CaseNote.route");
const CaseType = require("./CaseType.route");
const CaseStatus = require("./CaseStatus.route");
const Task = require("./Task.route");
const Staff = require("./Staff.route");
const userCase = require("./usercase.route");

router.use("/auth", authRoutes);
router.use("/user", user);
router.use("/ProfileDetail", ProfileDetails);
router.use("/task", Task);
router.use("/staff", Staff);
router.use("/caseNote", CaseNote);
router.use("/caseType", CaseType);
router.use("/caseStatus", CaseStatus);
router.use("/userCase", userCase);
router.get("/countryCode", getCountryCode);
router.get("/getCountryList", getCountryCode);

router.get("/test", validateAccessToken, (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
