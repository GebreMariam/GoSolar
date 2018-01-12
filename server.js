const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoSolar";

require('./config/passport.js')(passport);

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(flash());


mongoose.Promise = global.Promise;
mongoose.set('debug', true);
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
//global variables
app.use(function(req, res, next){
    res.locals.user = req.user || null;
    next();
})

app.use("/auth", authRoutes)
app.use("/", apiRoutes)

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});