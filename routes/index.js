const router = require("express").Router();
const createError = require("http-errors");
const Notification = require("../models/Notification.model");
const formParentModel = require("../models/formModel/formParent");

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.post("/test", async (req, res) => {
  const parentSchema = await formParentModel.create(req.body);
  return res.status(200).json({
    success: true,
    parentSchema,
  });
});

router.get("/test", (req, res) => {
  return res.status(200).json({
    message: "success",
  });
});

router.use("/api", (req, res, next) => {
  next(
    createError.NotFound("The route you are trying to access does not exist.")
  );
});

// eslint-disable-next-line no-unused-vars
router.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

module.exports = router;
