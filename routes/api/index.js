const router = require("express").Router();

const authRoutes = require("./Auth.route");

const validateAccessToken = require("../../middlewares/jwtValidation");
const feedback = require("./Feedback.route.js");
const user = require("./user.rout");
const getCountryCode = require("../../controllers/CountryCode/CountryCode");
const ProfileDetails = require("./ProfileDetail.route.js");
const Contact = require("./Contact.route");
const Enquiry = require("./Enquiry.route");
const NewCase = require("./NewCase.route")

router.use("/auth", authRoutes);
router.use("/feedback", feedback);
router.use("/user", user);
router.use("/ProfileDetail", ProfileDetails);
router.use("/contact", Contact);
router.use("/enquiryForm", Enquiry);
router.use("/newCase", NewCase);
router.get("/countryCode", getCountryCode);

router.get("/test", validateAccessToken, (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
