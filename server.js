const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const passport = require('passport');
require('./config/passport.js')(passport);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
require('./routes/routes')(app, passport);
const flash = require('connect-flash');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoSolar";
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect(MONGODB_URI, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + MONGODB_URI + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + MONGODB_URI, {
            useMongoClient: true
        });
    }
});

app.use(session({ secret: 'whoLetThedogsOut'}));
app.use(passport.initialize());
app.use(passport.session()); //persistent login
app.use(flash()); // connect-flash for flash messaging

//global variables
app.use(function(req, res, next){
    res.locals.user = req.user || null;
    next();
})
// app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});