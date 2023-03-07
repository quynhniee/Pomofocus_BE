const db = require("../../config/database");
const { DataTypes } = require("sequelize");

// const soundsData = [
//   {
//     name: "Kitty",
//     sound:
//       "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EccxvbGvCBpMkzvKy4TEazEBmjlX5S9heWJ1x2ZP3oGpfQ?e=wHgqIM",
//   },
//   {
//     name: "Dog",
//     sound:
//       "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EWF8FKkwqaJPi1jMam9Jb6UBWu4kd8xS6GFCii3qAiU-aQ?e=aQyxj1",
//   },
//   {
//     name: "Digital",
//     sound:
//       "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EVByrQ6TPjdPiPyKBhq64u0B2M0Me37c_mDCiAyQ40pxfA?e=vtwbXs",
//   },
//   {
//     name: "Alarm",
//     sound:
//       "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EQgCDM8kNaBGvW60kQIPjRcBdg5EiIukb8jFtLJV9LXTSg?e=W9nsee",
//   },
// ];

const Alarm = db.define(
  "alarm",
  {
    name: {
      type: DataTypes.STRING,
    },
    sound: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

Alarm.sync({ alter: true })
  .then(() => console.log("Sync Alarm"))
  .catch((error) => console.log(error));
module.exports = Alarm;
