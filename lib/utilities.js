var gpio = require('pi-gpio-promise');

var Utilities = function(config) {
    this.config = config;
};

Utilities.prototype.pour = function(pump, oz) {

    var pin = this.config.pumps[pump];

    gpio.open(pin, "output").
    then(function() {

        // Open Pump
        gpio.write(pin, 1);

        setTimeout(function() {

            return gpio.write(pin, 0);
        }, this.convertOzToMilliseconds(oz));

    }.bind(this)).
    then(function() {
        return gpio.close(pin);
    }).
    then(null, function(err) {
        console.log(err);
    });
}

/**
 * Since the pump is unaware of OZ's we need to convert the desired OZ to milliseconds to keep the pump on for
 */
Utilities.prototype.convertOzToMilliseconds = function(oz) {
    return this.config.oz * oz;
}

module.exports = Utilities;