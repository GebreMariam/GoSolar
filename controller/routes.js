//app/routes.js

module.exports = function(app, passport) {
    //HOME PAGE// w/ login link
    app.get('/', function(req, res){
        res.render('index.ejs'); // load index.ejs file
    });
//SHOW the signup form
    app.get('/signup', function(req, res){
        //render the page and pass any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });    
    //process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true //allow flash messages
    }));
    //process login form
     app.get('/login', function(req, res){
        //render the page and pass any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true //allow flash messages
    }));
    //PROFILE SECTION
    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs', {
            user: req.user /// get the user out of the sesion and pass to template
        });
    })
    //LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
function isLoggedIn(req, res, next) {
    //if user is authenticated, carry on
    if (req.isAuthenticated())
        return next();
    //else rediret to home page
    res.redirect('/');

}