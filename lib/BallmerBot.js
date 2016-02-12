"use strict";

var _ = require('underscore'),
    Utilities = require('./_utilities');

var BallmerBot = function (config) {
    this.config = config;
    this.utilities = new Utilities(this.config);
};

BallmerBot.prototype.pour = function(pump, oz) {

    this.utilities.pour(pump, oz);

};

module.exports = BallmerBot;