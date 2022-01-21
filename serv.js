var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var cors = require("cors");

var user = require('./js/node/userAPI.js');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(gzippo.staticGzip("" + __dirname + "/"));

app.listen(process.env.PORT || 5000);

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/user/validate', function (req, res) {
    user.verifyClientData(req.body).then(function (response) {
        res.json(response);
    }, function (error) {
        console.log("GET FAILED: "+ error);
    });
});

app.post('/user/create', function (req, res) {
    console.log(req.body);
    
    user.createClient(req.body).then(function (response) {
        res.json(response);
    }, function (error) {
        console.log(error);
    });

    // user.createClient(req.body).then(function (response) {
    //     console.log(response);
    //     res.json(response);
    // }, function (error) {
    //     console.log("GET FAILED: "+ error);
    // });
});

// JSON_SERVER SETUP

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})