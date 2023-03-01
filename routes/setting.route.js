const express = require("express");
const router = express.Router();
const settingController = require("../controllers/setting.controller");

// get setting data
router.use("/", settingController.getSetting);

module.exports = router;
