const Task = require("../models/task/task");
const { v4: uuidv4 } = require("uuid");

// create new task
exports.create = async (req, res, next) => {
  try {
    const { content, isActive, isCompleted, act, EP } = req.body;
    const userId = req.user.dataValues.id;
    const task = await Task.create({
      id: uuidv4(),
      content: content,
      isActive: isActive,
      isCompleted: isCompleted,
      act: act,
      EP: EP,
      userId: userId,
    });

    res.status(200).json({
      message: "Created task successfully!",
      task: task,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// get all tasks
exports.getAll = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const tasksList = await Task.findAll({
      where: { userId: userId },
    });

    res.status(200).json(tasksList);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// update task
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body;
    await Task.update(updatedTask, {
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: "Update task successfully!",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// delete task
exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Delete task successfully!" });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
