const path = require("path");
const router = require("express").Router();
const dataController = require("./dataController");
const request = require('request');
// API Routes
router.route("/CostData/:region")
  .get(dataController.GetCostData)
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
