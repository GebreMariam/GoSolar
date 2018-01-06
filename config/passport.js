//config/passport.js
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const flash = require('connect-flash');

//expose / export this function to the app.
module.exports = function(passport){
    //passport session setup for persistent login
    //serialize the user session
    passport.serializeUser(function(user, done){
        done(null, user._id);
        console.log('serialize==>' , user)
    });
    //used to deserialize the user// 
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user){
            console.log('deserialize==> ',user);
            done(err, user);
        });
    });

    passport.use('local-login', new localStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {//valider user
        console.log('local-login........');
            User.findOne({email : email }, (err, user) => {
                if (err)
                    // console.log('ERR');
                    return done(err);
                if (!user){
                    // console.log('!USER');
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password))
                    return done(null, false,{ message: 'Incorrect PW.' });
                //all is well
                return done(null, user);
            });
    }));

    //LOCAL SIGNUP
    //using named strategies since we have login and signup
    passport.use('local-signup', new localStrategy({
        firstNameField: 'firstName',
        lastNameField: 'lastName',
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        console.log(req.body);
                //asynchronous
        //User.findOne wont fire unless dat is sent back
        process.nextTick(() => {
            console.log('nextTick in motion!');
            //check if user alread exists
            User.findOne({'email' : email }, (err, user) => {
                console.log('GONE TO FIND');
                if (err)
                    return done(err);
                    //check if user exists
                if (user){
                    return done(null, false);
                } else {
                    //if no user matches / create user
                    var newUser = new User();
                    console.log('new User()... ', newUser);
                    console.log(req.body.firstName);
                    //set the users 'local' credentials
                    newUser.firstName = req.body.firstName;
                    newUser.lastName = req.body.lastName;
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    //save the user
                    newUser.save(function(err){
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
  
};