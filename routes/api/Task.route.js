const express = require("express");
const createTask = require("../../controllers/Tasks/createTask");
const deleteTask = require("../../controllers/Tasks/deleteTask");
const updateTask = require("../../controllers/Tasks/updateTask");
const getSingleTask = require("../../controllers/Tasks/getSingleTask");
const getTask = require("../../controllers/Tasks/getTask");

const router = express.Router();
router.post("/", createTask);
router.get("/", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", getSingleTask);

module.exports = router;
