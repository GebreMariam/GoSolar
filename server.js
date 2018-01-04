const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
require('./config/passport.js')(passport); 
const routes = require('./controller/routes')(app, passport);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoSolar";

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(MONGODB_URI, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + MONGODB_URI + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + MONGODB_URI, {
            useMongoClient: true
        });
    }
});
mongoose.set('debug', true);
// Set up promises with mongoose
mongoose.Promise = global.Promise;

app.use(session({ secret: 'whoLetThedogsOut'}));
app.use(passport.initialize());
app.use(passport.session()); //persistent login
app.use(flash()); // connect-flash for flash messaging


//global variables
app.use(function(req, res, next){
    res.locals.user = req.user || null;
    next();
})
app.use('/', routes)

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});