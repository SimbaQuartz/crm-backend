const listFormToShow = require("../../controllers/formCase/listFormToShow");

const router = require("express").Router();

router.get("/get", listFormToShow);

module.exports = router;
