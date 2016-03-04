"use strict";

var _ = require('underscore'),
    Utilities = require('./Utilities');

var BallmerBot = function (config) {
    this.config = config;
    this.utilities = new Utilities(this.config);
};

BallmerBot.prototype.pour = function(data) {
    this.utilities.pour(data.pump, data.oz);
};

module.exports = BallmerBot;