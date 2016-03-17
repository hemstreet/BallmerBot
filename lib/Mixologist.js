"use strict";

var gpio = require('pi-gpio');

var Mixologist = function(ballmerBot) {
    this.ballmerBot = ballmerBot;
};

Mixologist.prototype.togglePinWithDelay = function(pin, milis) {
    gpio.open(pin, "output", function(err) {
        if(err) {
            console.log(err);
            return
        }
        // Had to reverse value passed because the relays are backwards?
        gpio.write(pin, 0, function() {
            setTimeout(function() {
                gpio.write(pin, 1, function() {
                    gpio.close(pin);
                });
            }, milis);
        }.bind(this));
    }.bind(this));
};

module.exports = Mixologist;