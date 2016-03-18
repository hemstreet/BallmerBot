"use strict";

var _ = require('underscore'),
    Utilities = require('./Utilities');

var BallmerBot = function (config) {
    this.config = config;
    this.database = require('./mongoose')(this.config);
    this.utilities = new Utilities(this.config, this.database);

};

BallmerBot.prototype.pour = function(data) {
    this.utilities.pour(data.pump, data.oz);
};

BallmerBot.prototype.getInventory = function() {
    return this.utilities.getInventory();
};

BallmerBot.prototype.getAvailableDrinks = function() {

    return this.utilities.getAvailableDrinks();

};

module.exports = BallmerBot;