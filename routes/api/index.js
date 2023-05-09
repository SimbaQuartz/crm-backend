const router = require("express").Router();

const authRoutes = require("./Auth.route");

const validateAccessToken = require("../../middlewares/jwtValidation");
const user = require("./user.rout");
const getCountryCode = require("../../controllers/CountryCode/CountryCode");
const ProfileDetails = require("./ProfileDetail.route.js");
const NewCase = require("./NewCase.route")

router.use("/auth", authRoutes);
router.use("/user", user);
router.use("/ProfileDetail", ProfileDetails);
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
