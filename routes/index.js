const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.use("/", require("./auth.route"));
module.exports = router;
