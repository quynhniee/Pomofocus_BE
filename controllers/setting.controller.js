const Alarm = require("../models/alarm");
const Setting = require("../models/setting");
const Tabs = require("../models/tabs");
const Ticking = require("../models/ticking");
const User = require("../models/user");

// get all setting
exports.getSetting = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const setting = await Setting.findOne({
      where: { userId: userId },
      include: [
        {
          model: Alarm,
          required: true,
        },
        {
          model: Ticking,
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
