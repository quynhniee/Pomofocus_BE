const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Tabs = require("./tabs");
const Alarm = require("./alarm");
const Ticking = require("./ticking");
const User = require("./user");

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

// Associate Setting - Tabs (1-n)
Setting.hasMany(Tabs);
Tabs.belongsTo(Setting);

// Associate Setting - Alarm (1-1)
Alarm.hasOne(Setting);
Setting.belongsTo(Alarm);

// Associate Setting - Ticking (1-1)
Ticking.hasOne(Setting);
Setting.belongsTo(Ticking);

// Associate Setting - User (1-1)
User.hasOne(Setting);
Setting.belongsTo(User);

// Sync models
User.sync({ alter: true })
  .then(() => console.log("Sync User"))
  .then(() => Alarm.sync({ alter: true }))
  .then(() => console.log("Sync Alarm"))
  .then(() => Ticking.sync({ alter: true }))
  .then(() => console.log("Sync Ticking"))
  .then(() => Setting.sync({ alter: true }))
  .then(() => console.log("Sync Setting"))
  .then(() => Tabs.sync({ alter: true }))
  .then(() => console.log("Sync Tabs"))

  .catch((error) => console.log(error));

module.exports = Setting;
