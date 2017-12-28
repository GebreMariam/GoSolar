const path = require("path");
const router = require("express").Router();
const dataController = require("./dataController");
// API Routes
router.route("/costData")
  .get(dataController.AddCostData)
  .post(dataController.GetCostData);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
