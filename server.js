"use strict";

//var express = require('express'),
    //app = express(),
    //Socket = require('./lib/Socket'),
    var config = require('./config/config'),
    argv = require('yargs').argv,
    BallmerBot = (!!argv.mock) ? require('./mock/BallmerBot') : require('./lib/BallmerBot'), // Makeshift mock bot
    ballmerBot = new BallmerBot(config);

ballmerBot.pour(0,1);
ballmerBot.pour(1,1);
ballmerBot.pour(2,1);
ballmerBot.pour(3,1);
ballmerBot.pour(4,1);

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