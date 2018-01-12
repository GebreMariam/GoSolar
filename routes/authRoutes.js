const Router = require('router');
const passport = require('passport');

router = Router();
    //process the signup form
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true //allow flash messages
    }))
     //process login form
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/succcess',
        failureRedirect: '/failed',
        failureFlash: true //allow flash messages
    }))
   
    //LOGOUT
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    })

module.exports = router