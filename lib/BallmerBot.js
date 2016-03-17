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

BallmerBot.prototype.getInventory = function() {
    return this.utilities.getInventory();
};

BallmerBot.prototype.getAvailableDrinks = function() {
    // Return deferred

    return {
        "moscowMule": {
            "vodka": 2,
            "gingerBeer": 2,
            "limeJuice": 0.5
        }
    };
    //return this.utilities.getAvailableDrinks();

};

module.exports = BallmerBot;