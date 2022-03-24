const compression = require('compression')
const express = require('express');

var app = express();
app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }

    return compression.filter(req, res)
}

app.listen(process.env.PORT || 5000);
app.use("/", express.static( __dirname + "/src"));

app.get('/backend.js', function(req, res){
    res.send("var BACKEND='"+process.env.BACKEND+"'");
});