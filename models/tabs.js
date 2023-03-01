const db = require("../config/database");
const { DataTypes } = require("sequelize");

const Tabs = db.define(
  "tabs",
  {
    themeColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minute: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Tabs.sync()
  //   .then(() => {
  //     Tabs.bulkCreate(require("../defaultSetting.json").tabs)
  //   })
  .catch((error) => console.log(error));

module.exports = Tabs;
