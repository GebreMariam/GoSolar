const path = require("path");
const dataController = require("../controller/dataController");

module.exports = function(app, passport) {
 //process the signup form
  app.post('/signup', passport.authenticate('signup', {
      successRedirect: '/',
      failureRedirect: '/'
      // failureFlash: true //allow flash messages
    }));
//process login form
  app.post('/login', passport.authenticate('login', {
        successRedirect: '/costdata',
        failureRedirect: '/PRODUCTS'
        // failureFlash: true //allow flash messages
      }));
  //LOGOUT
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  app.route("/CostData")
  .get(dataController.CostData)
    
  app.route("/CostData/:region")
  .get(dataController.CostData)

  app.route("/Products")
  .get(dataController.Products)

  app.route("/productDetails/:id")
  .get(dataController.ProductDetails)
  
  app.route("/orders/:user")
  .get(dataController.Orders)
    
  // If no API routes are hit, send the React app
  // app.use(function(req, res) {
  //     res.sendFile(path.join(__dirname, "../client/public/index.html"));
  //   });

}
  
