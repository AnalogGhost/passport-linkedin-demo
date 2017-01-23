require('dotenv').config();
var express = require('express');
var app = express();

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;

var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SECRET_KEY]
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    //Decide what to store in session.
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    //Take whats stored in session and query database/etc.
    done(null, obj);
});

passport.use(new LinkedInStrategy( {
    consumerKey: process.env['LINKEDIN_CLIENT_ID'],
    consumerSecret: process.env['LINKEDIN_CLIENT_SECRET'],
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope:['r_basicprofile']
},function(token, tokenSecret, profile, done) {
    // Get user from database or create.
    return done(null, profile);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);    
  }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      done(null, profile);
  }
));

var auth = require('./routes/auth.js');

app.get('/', function(req,res,next) {
    res.send('Back Home');
})

app.use('/auth', auth);

app.listen('3000', function() {
    console.log('Listening on port 3000');
})