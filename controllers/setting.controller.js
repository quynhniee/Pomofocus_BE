const Setting = require("../models/setting");
const Tabs = require("../models/tabs");

// get all setting
exports.getSetting = async (req, res, next) => {
  try {
    const setting = await Setting.findAll();
    res.send(setting);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
