const db = require("../config/database");
const { DataTypes } = require("sequelize");

const soundsData = [
  { name: "None", sound: "none" },
  {
    name: "Ticking Fast",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/Eb2WRtm90m1IkY6kvYoruesB0shTj2u_TyuRn-w5W2WaqQ?e=gZieCW",
  },
  {
    name: "Ticking Slow",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/ETjd4lJuXLpLuaDi1dRRdaEBCk1cCPIz4bLL7tPELmjsBA?e=HxQmP3",
  },
  {
    name: "Cannon In D",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/ESN8SdlUwm1JrS3CDCI1cewBAIezshNRULd7Imu09zpvuA?e=DsOxtQ",
  },
  {
    name: "Snow Flower",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EdasP5M53B1Ds5eRhbJyUdUBBR0cdeXNe_l2F_sXRNCyhg?e=zNgChs",
  },
  {
    name: "My Neighbor Totoro",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/Ea8UzI0vyeJImb91xo_8y_MBodIPXK2JzzNHr6-qHHEJLQ?e=pcqVOr",
  },
  {
    name: "Ponyo On The Cliff By The Sea",
    sound:
      "https://kekkekew-my.sharepoint.com/:u:/g/personal/sirq_kekkekew_onmicrosoft_com/EazsbmXwVKhDg1VX3BjrFuwBbDS3WU690_zn3q598eDaHA?e=z9p101",
  },
];

const Ticking = db.define(
  "ticking",
  {
    sound: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    volume: {
      type: DataTypes.FLOAT,
      defaultValue: 0.5,
    },
    // settingId: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: 1,
    // },
  },
  { timestamps: false, freezeTableName: true }
);

// Ticking.sync()
//   .then(() => {
//     console.log("Sync Ticking table");
//     Ticking.bulkCreate(soundsData)
//       .then(() => console.log("create Ticking sound completed"))
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));

Ticking.sync()
  //   .then(() => Ticking.bulkCreate(soundsData))
  .then(() => console.log("Sync Ticking"))
  .catch((error) => console.log(error));
module.exports = Ticking;
