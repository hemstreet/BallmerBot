"use strict";

var express = require('express'),
    app = express(),
    config = require('./config/config'),
    argv = require('yargs').argv,
    BallmerBot = require('./lib/BallmerBot');

config.debug = !!argv.mock;

var ballmerBot = new BallmerBot(config);

app.use(express.static('app'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

require('./routes/api')(app, ballmerBot);

var server = app.listen(argv.port || config.port || 8080, function () {
    var serverAddress = server.address();
    var host = serverAddress.address;
    var port = serverAddress.port;

    console.log('Example app listening at http://%s:%s', host, port);
});