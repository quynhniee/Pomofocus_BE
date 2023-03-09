const Alarm = require("../models/alarm/alarm");
const Setting = require("../models/setting/setting");
const Tabs = require("../models/setting/tabs");
const Ticking = require("../models/ticking/ticking");
const User = require("../models/user/user");

// ==================Nested Setting==============

// get {setting & tabs}
exports.getTotalSetting = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const setting = await Setting.findOne({
      where: { userId: userId },
      include: [
        {
          model: Tabs,
          required: true,
        },
      ],
    });

    res.status(200).send(setting);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// get setting
exports.getSetting = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const setting = await Setting.findOne({
      where: { userId: userId },
    });

    res.status(200).send(setting);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// update setting
exports.updateSetting = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const updatedSetting = req.body;

    await Setting.update(updatedSetting, {
      where: { userId: userId },
    });

    res.status(200).json({
      message: "Update setting successfully!",
    });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    next(error);
  }
};

// ====================Tabs=================

// get tabs setting
exports.getTabs = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const setting = await Setting.findOne({ where: { userId: userId } });

    const tabs = await Tabs.findAll({
      where: { settingId: setting.id },
      order: [["order", "ASC"]],
    });

    res.status(200).json({
      tabs: tabs,
    });
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};

// update tabs setting
exports.updateTabs = async (req, res, next) => {
  try {
    const updatedTabs = req.body;

    for (const tab of updatedTabs) {
      await Tabs.update(tab, {
        where: {
          id: tab.id,
        },
      });
    }

    res.status(200).json({ message: "Update tabs setting successfully!" });
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};

// ==================Alarm===================
// get all alarm sounds
exports.getAlarm = async (req, res, next) => {
  try {
    const sounds = await Alarm.findAll();

    res.status(200).json({ sounds: sounds });
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};

// =================Ticking===================
// get all ticking sounds
exports.getTicking = async (req, res, next) => {
  try {
    const sounds = await Ticking.findAll();

    res.status(200).json({ sounds: sounds });
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
};
