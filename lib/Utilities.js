var gpio = require('pi-gpio-promise');

var Utilities = function(config) {
    this.config = config;
};

Utilities.prototype.pour = function(pump, oz) {


    var pin = this.config.pumps[pump];
    console.log('in utilities pour', pin);
    // Callback hell!
    gpio.open(pin, "output", function(err) {
        gpio.write(pin, 1, function() {
            console.log('writing pin to ON', pin);
            setTimeout(function() {
                gpio.write(pin, 0, function() {
                    console.log('writing pin to OFF', pin)
                    gpio.close(pin);
                });
            }, this.convertOzToMilliseconds(oz));
        });
    });

    //gpio.open(pin, "output").
    //then(function() {
    //    console.log('Pouring');
    //    // Open Pump
    //    gpio.write(pin, 1);
    //
    //    setTimeout(function() {
    //
    //        console.log('Done Pouring');
    //        return gpio.write(pin, 0);
    //    }, this.convertOzToMilliseconds(oz));
    //
    //}.bind(this)).
    //then(function() {
    //    console.log('Closing Pin');
    //    return gpio.close(pin);
    //}).
    //then(null, function(err) {
    //    console.log(err);
    //});
}

/**
 * Since the pump is unaware of OZ's we need to convert the desired OZ to milliseconds to keep the pump on for
 */
Utilities.prototype.convertOzToMilliseconds = function(oz) {
    return this.config.oz * oz;
}

module.exports = Utilities;