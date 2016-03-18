"use strict";


var q = require('q');


var Utilities = function(config, db) {
    this.config = config;
    this.db = db;

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
    var deferred = q.defer();

    this.db.getInventory().then(function(drinks) {
        deferred.resolve(drinks)
    });

    return deferred.promise;
};

Utilities.prototype.getAvailableDrinks = function() {

    var deferred = q.defer();

    this.db.getAvailableDrinks().then(function(drinks) {
        deferred.resolve(drinks);
    });

    return deferred.promise;


};
module.exports = Utilities;