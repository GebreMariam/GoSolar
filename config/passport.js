//config/passport.js
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// const flash = require('connect-flash');

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
    //LOCAL SIGNUP
    //using named strategies since we have login and signup
    passport.use('signup', new localStrategy({
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
           
            User.findOne({'email' : email }, (err, user) => {
                //err
                if (err)
                    return done(err);
                    //check if user exists
                if (user){
                    return done(null, false, req.flash('signupMessage', 'That email be taken, buddy!'));
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
                    console.log('new User()... ', newUser);

                    newUser.save(function(err){
                        if(err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));
    passport.use('login', new localStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        console.log('validating user...')
            //valider user
            User.findOne({'email' : email }, (err, user) => {
                //err
                if (err)
                    return done(err);
                    //check if user exists
                if (!user){
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password))
                    return done(null, false, { message: 'Incorrect password.' });
                //all is well
                return done(null, user);
            });
    }));
};