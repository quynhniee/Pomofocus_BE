const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const Setting = db.define(
  "setting",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    autoStartBreak: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    autoStarPomodoro: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    longBreakInterval: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
    },
    autoSwitchTasks: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    alarmVolume: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5,
    },
    alarmSoundRepeat: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tickingVolume: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Setting;