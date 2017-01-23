require('dotenv').load();
var express = require('express');
var app = express();

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;

app.use(passport.initialize());

passport.use(new LinkedInStrategy({
    },
    function(token, tokenSecret, profile, done) {

    })
);

var auth = require('./routes/auth.js');


app.use('/auth', auth);

app.listen('3000', function() {
    console.log('Listening on port 3000');
})