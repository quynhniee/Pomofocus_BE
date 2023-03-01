const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.use("/", require("./auth.route"));
router.use("/", require("./setting.route"));
module.exports = router;
