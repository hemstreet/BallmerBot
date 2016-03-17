"use strict";

var BallmerBot = require('../lib/BallmerBot');

BallmerBot.prototype.pour = function(data) {
    this.mock('Pouring ' + data.oz + 'oz from pump #' + data.pump);
};

BallmerBot.prototype.mock = function(message) {
    console.log("MOCK", message);
};

module.exports = BallmerBot;