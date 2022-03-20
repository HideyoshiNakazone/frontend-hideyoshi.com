const jade = require('jade');
const cors = require("cors");
const gzippo = require('gzippo');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require("cookie-parser");
const session = require('express-session');

// var user = require('./nodejs/userAPI.js');
// var jserver = require('./nodejs/userAPI.js');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000);
app.use(gzippo.staticGzip("" + __dirname + "/src"));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var options = {};

app.get('/backend.js', function(req, res){
    res.send("var BACKEND='"+process.env.BACKEND+"'");
});