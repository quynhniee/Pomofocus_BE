const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/is-auth");
const taskController = require("../controllers/task.controller");

// get all tasks
router.get("/", isAuth, taskController.getAll);

// update task
router.put("/:id", isAuth, taskController.update);

// create task
router.post("/", isAuth, taskController.create);

// delete task
router.delete("/:id", isAuth, taskController.delete);

// delete all task
router.delete("/", isAuth, taskController.deleteAll);

module.exports = router;
