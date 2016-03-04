var gpio = require('pi-gpio');

var Utilities = function(config) {
    this.config = config;
};

Utilities.prototype.pour = function(pump, oz) {

    var pin = this.config.pumps[pump];
    console.log('in utilities pour', pin);
    // Callback hell!
    gpio.open(pin, "output", function(err) {
        if(err) {
            console.log(err)
            return
        }
        // Had to reverse value passed because the relays are backwards?
        gpio.write(pin, 0, function() {
            console.log('writing pin to ON', pin);
            setTimeout(function() {
                gpio.write(pin, 1, function() {
                    console.log('writing pin to OFF', pin)
                    gpio.close(pin);
                });
            }, this.convertOzToMilliseconds(oz));
        }.bind(this));
    }.bind(this));
}

/**
 * Since the pump is unaware of OZ's we need to convert the desired OZ to milliseconds to keep the pump on for
 */
Utilities.prototype.convertOzToMilliseconds = function(oz) {
    return this.config.oz * oz;
}

module.exports = Utilities;