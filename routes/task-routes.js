const express = require("express");

const { v4: uuiv4 } = require("uuid");
const taskController = require("../controllers/tasks-controllers");

const router = express.Router();

router.get("/", taskController.getAllTask);

router.get("/:tid", taskController.getTaskById);

router.patch("/:tid", taskController.updateTask);

router.delete("/:tid", taskController.deleteTask);

router.post("/", taskController.addTask);

module.exports = router;
