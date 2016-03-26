#!/usr/bin/env node

var express = require('express'),
    app = express(),
    config = require('./config/config'),
    BallmerBot = require('./lib/BallmerBot'),
    argv = require('yargs').usage('Ballmer Bot - Drink pouring bot').options('mock', {
        describe:  'Run the server in mock mode ( simulated Pi )'
    }).options('port', {
        describe:  'Port for the sever to run on'
    }).boolean('help')
        .alias('help', 'h')
        .describe('help', 'display help').argv;

if (argv.help) {
    require('yargs').showHelp();
    return;
}

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