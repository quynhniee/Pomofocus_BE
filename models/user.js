const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Setting = require("./setting");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.UUIDV4,
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

Setting.hasOne(User);
User.belongsTo(Setting);

User.sync({ alter: true }).then(() => console.log("Sync User completed"));

module.exports = User;
