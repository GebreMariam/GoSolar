const express = require("express")
const passport = require("passport")

const router = new express.Router()

    //process the signup form
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/'
        // failureFlash: true //allow flash messages
    }));
    //process login form
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/costdata',
        failureRedirect: '/PRODUCTS'
        // failureFlash: true //allow flash messages
        }));
    //LOGOUT
    router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
    });

module.exports = router
