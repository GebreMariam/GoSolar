const path = require("path");
const dataController = require("../controller/dataController");
const express = require('express').Router();
var Router = require('router');

router = Router();

  router.route("/CostData")
  .get(dataController.CostData)
    
  router.route("/CostData/:region")
  .get(dataController.CostData)

  router.route("/Products")
  .get(dataController.Products)

  router.route("/productDetails/:id")
  .get(dataController.ProductDetails)
  
  router.route("/orders/:user")
  .get(dataController.Orders)

  router.route("/createOrder")
    .post(dataController.CreateOrder)
    
  // If no API routes are hit, send the React app
  // router.use(function(req, res) {
  //     res.sendFile(path.join(__dirname, "../client/public/index.html"));
  //   });

module.exports = router;
