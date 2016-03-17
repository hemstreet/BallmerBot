"use strict";

var Utilities = function(config) {
    this.config = config;

    var path = (config.debug) ? '../mock/' : './',
        Mixologist = require(path + 'Mixologist');

    this.mixologist = new Mixologist(config);
};

Utilities.prototype.pour = function(pump, oz) {

    var pin = this.config.pumps[pump];

    this.mixologist.togglePinWithDelay(pin, this.convertOzToMilliseconds(oz));
};

/**
 * Since the pump is unaware of OZ's we need to convert the desired OZ to milliseconds to keep the pump on for
 */
Utilities.prototype.convertOzToMilliseconds = function(oz) {
    return Math.round(this.config.oz * oz);
};

Utilities.prototype.getInventory = function() {
    console.log('In utilities.js, need to get real list of bottles from db');
    return {
        bottles: ["vodka", "rum", "coke", "triplesec", "tequila"]
    }
};

Utilities.prototype.getAvailableDrinks = function() {

    console.log('In utilities.js, need to get real list of drinks from db');

    // Do mongo query, where getInventory contains all bottles needed.
    // Query drinks where value[key].each contains available bottles / ingredients
    //{
    //    bottles: ["vodka", "rum", "coke", "triplesec", "tequila"]
    //}

    return {
        "moscowMule" : {
            "vodka" : 2,
            "gingerBeer" : 2,
            "limeJuice": 0.5
        }
    };

    // Return deferred
};
module.exports = Utilities;