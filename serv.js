const cors = require("cors");
const gzippo = require('gzippo');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require("cookie-parser");
const session = require('express-session');

var user = require('./js/node/userAPI.js');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(gzippo.staticGzip("" + __dirname + "/"));

app.listen(process.env.PORT || 5000);

app.use(cors({
    origin: [
        "http://localhost:5000"
    ], credentials: true
}));

app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true
}));


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const validatePayloadMiddleware = (req, res, next) => {
    if (req.body) {
        next();
    } else {
        res.status(403).send({
            errorMessage: 'You need a payload'
        });
    }
};

app.get('/session/validate/', validatePayloadMiddleware, function (req, res) {
    if (req.session.client) {
        res.send(req.session.client);
    } else {
        res.status(403).send(false)
    }
});

app.post('/session/destroy', validatePayloadMiddleware, function (req, res) {
    req.session.destroy(function (error) {
        if (error) {
            res.status(500).send("Logout Failed!");
        } else {
            res.status(200).send({})
        }
    })
})

app.post('/user/validate/', validatePayloadMiddleware, function (req, res) {
    user.verifyClientData(req.body).then(function (response) {
        delete response.passwd;
        delete response.salt;
        delete response.id;
        
        req.session.client = response;
        res.send(response);
    }, function (error) {
        res.status(500).send(error.message);
    });
});

app.post('/user/create', validatePayloadMiddleware, function (req, res) {
    user.createClient(req.body).then(function (response) {
        res.send(response);
    }, function (error) {
        res.status(500).send(error.message);
    });
});