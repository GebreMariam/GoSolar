const path = require("path");
const approuter = require("express").Router();
const dataController = require("./dataController");
// const request = require('request');
// API Routes

Routes = function(app, passport) {
  app.route("/CostData")
    .get(dataController.CostData)
    
    app.route("/CostData/:region")
    .get(dataController.CostData)

    app.route("/Products")
    .get(dataController.Products)

  //process the signup form
  app.route('/signup')
    .post(passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true //allow flash messages
    }));
//process login form  RE-DO-ALL
app.route('/login') 
      .get(function(req, res){
        //render the page and pass any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
      })
      .post(passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true //allow flash messages
      }));

  // If no API routes are hit, send the React app
  // app.use(function(req, res) {
  //     res.sendFile(path.join(__dirname, "../client/public/index.html"));
  //   });
    
  }

  module.exports = Routes