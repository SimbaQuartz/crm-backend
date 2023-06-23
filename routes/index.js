const router = require("express").Router();
const createError = require("http-errors");
const Notification = require("../models/Notification.model");
const formCategories = require("../models/formModel/formCategories");

const apiRoutes = require("./api");
const formSubCategories = require("../models/formModel/formSubCategories");

router.use("/api", apiRoutes);

router.post("/cat", async (req, res) => {
  const parentSchema = await formCategories.create(req.body);
  return res.status(200).json({
    success: true,
    parentSchema,
  });
});

router.post("/subcat", async (req, res) => {
  const parentSchema = await formSubCategories.create(req.body);
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
