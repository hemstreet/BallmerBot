"use strict";

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./lib/config/config'),
    Database = require('./lib/Database'),
    db = new Database(config),
    BallmerBot = require('./lib/BallmerBot'),
    argv = require('yargs').usage('Ballmer Bot - Drink pouring bot\n Usage: $0 [,options]').options('mock', {
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

require('./lib/routes/api')(app, {
    ballmetBot: ballmerBot,
    db: db
});

var server = app.listen(argv.port || config.port || 8080, function () {
    var serverAddress = server.address();
    var host = serverAddress.address;
    var port = serverAddress.port;

    console.log('Example app listening at http://%s:%s', host, port);
});