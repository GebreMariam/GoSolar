const Router = require('router');
const passport = require('passport');

router = Router();
    //process the signup form
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/SignUpSuccess',
        failureRedirect: '/auth/SignUpFailed',
        failureFlash: true //allow flash messages
    }))
     //process login form
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/isAuth',
        failureRedirect: '/auth/isNotAuth',
        failureFlash: true //allow flash messages
    }))
    router.get('/isAuth', (req, res)=> {
        console.log('USER IS ', req.user)
        res.json(req.user);
    })
    router.get('/isNotAuth', (req, res) => {
        let message = 'Incorrectd Username or Password';
        res.send(message)
    })
    router.get('/SignUpSuccess', (req, res)=> {
        res.json(req.user);
    })
    router.get('/SignUpFailed', (req, res) => {
        let message = 'Something went wrong, please try again (email)';
        res.send(message)
    })
   
    //LOGOUT
    router.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    })

module.exports = router