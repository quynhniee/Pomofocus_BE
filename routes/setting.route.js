const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/is-auth");
const settingController = require("../controllers/setting.controller");

// get {setting, tabs}
router.get("/totalSetting", isAuth, settingController.getTotalSetting);

// get setting data
router.get("/setting", isAuth, settingController.getSetting);

// update setting
router.put("/setting", isAuth, settingController.updateSetting);

// get tabs setting
router.get("/tabs", isAuth, settingController.getTabs);

// update tabs setting
router.put("/tabs", isAuth, settingController.updateTabs);

// get alarm sounds
router.get("/alarm", settingController.getAlarm);

// get ticking sounds
router.get("/ticking", settingController.getTicking);

module.exports = router;
