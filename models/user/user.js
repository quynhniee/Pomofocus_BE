const { DataTypes } = require("sequelize");
const db = require("../../config/database");
const Tabs = require("../setting/tabs");
const Setting = require("../setting/setting");
const Task = require("../task/task");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

// Associate Setting - Tabs (1-n)
Setting.hasMany(Tabs);
Tabs.belongsTo(Setting);

// Associate Setting - User (1-1)
User.hasOne(Setting);
Setting.belongsTo(User);

// Associate User - Tasks (1-n)
User.hasMany(Task);
Task.belongsTo(User);

// Sync models
User.sync({ alter: true })
  .then(() => console.log("Sync User"))
  .then(() => Task.sync({ alter: true }))
  .then(() => console.log("Sync Task"))
  .then(() => Setting.sync({ alter: true }))
  .then(() => console.log("Sync Setting"))
  .then(() => Tabs.sync({ alter: true }))
  .then(() => console.log("Sync Tabs"))
  .catch((error) => console.log(error));

module.exports = User;
