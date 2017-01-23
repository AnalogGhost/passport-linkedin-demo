var express = require('express');
var router = express.Router();

var passport = require('passport');

router.get('/', function(req,res,next) {
    res.send('Auth');
});

module.exports = router;