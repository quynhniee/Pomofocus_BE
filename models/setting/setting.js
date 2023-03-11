const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const Setting = db.define(
  "setting",
  {
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
    alarmSound: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alarmVolume: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5,
    },
    alarmSoundRepeat: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tickingSound: {
      type: DataTypes.STRING,
      allowNull: true,
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
