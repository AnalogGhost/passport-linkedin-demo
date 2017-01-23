var express = require('express');
var app = express();

var auth = require('./routes/auth.js');

app.use('/auth', auth);

app.listen('3000', function() {
    console.log('Listening on port 3000');
})