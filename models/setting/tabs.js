const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const Tabs = db.define(
  "tabs",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
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

module.exports = Tabs;
