const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/is-auth");
const settingController = require("../controllers/setting.controller");

// get setting data
router.get("/setting", isAuth, settingController.getSetting);

module.exports = router;
