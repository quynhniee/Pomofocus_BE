const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Tabs = require("./tabs");
const Alarm = require("./alarm");
const Ticking = require("./ticking");

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
    // alarmId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 1,
    // },
    alarmVolume: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5,
    },
    alarmSoundRepeat: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    // tickingId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 1,
    // },
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

Setting.hasMany(Tabs);
Tabs.belongsTo(Setting);
Alarm.hasOne(Setting);
Setting.belongsTo(Alarm);
Ticking.hasOne(Setting);
Setting.belongsTo(Ticking);

Setting.sync()
  .then(() => console.log("Sync Setting"))
  .catch((error) => console.log(error));

module.exports = Setting;
