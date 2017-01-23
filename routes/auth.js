var express = require('express');
var router = express.Router();

var passport = require('passport');

router.get('/', function(req,res,next) {
    res.send('Auth');
});

router.get('/linkedin', 
    passport.authenticate('linkedin'), 
    function(req,res) {
        //This will be redirected to LinkedIn, this function will not be called.
    });

module.exports = router;