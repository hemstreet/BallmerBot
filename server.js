"use strict";

//var express = require('express'),
//app = express(),
//Socket = require('./lib/Socket'),
var config = require('./config/config'),
    argv = require('yargs').argv,
    lib = (!argv.mock) ? 'lib' : 'mock',
    BallmerBot = require('./' + lib + '/BallmerBot'),
    ballmerBot = new BallmerBot(config);

ballmerBot.pour({
    pump: 0,
    oz: 1
});
ballmerBot.pour({
    pump: 1,
    oz: 1
});
ballmerBot.pour({
    pump: 2,
    oz: 1
});
ballmerBot.pour({
    pump: 3,
    oz: 1
});
ballmerBot.pour({
    pump: 4,
    oz: 1
});

//app.use('/', express.static(__dirname + '/app'));
//
//app.get('/', function (req, res) {
//    res.sendFile('/index.html');
//});
//
//var server = app.listen(argv.port || config.port, function () {
//    var serverAddress = server.address();
//    var host = serverAddress.address;
//    var port = serverAddress.port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//});
//
//var io = require('socket.io')(server);
//new Socket(io, server, ballmerBot);