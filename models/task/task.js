const { DataTypes } = require("sequelize");
const db = require("../../config/database");

const Task = db.define("tasks", {
  content: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  act: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EP: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Task;
