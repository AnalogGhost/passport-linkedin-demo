var express = require('express');
var router = express.Router();

var passport = require('passport');

router.get('/', function(req,res,next) {
    res.send('Auth');
});

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook',{
    successRedirect :'/',
    failureRedirect : '/'
    })
);

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github',{
    successRedirect :'/',
    failureRedirect : '/'
    })
);

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin',{
    successRedirect :'/',
    failureRedirect : '/'}
    )
);

module.exports = router;