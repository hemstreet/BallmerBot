var gpio = require('pi-gpio');

var Pi = function(config) {
    this.config = config;
};

Pi.prototype.pour = function(pump, oz) {

    var pin = this.config.pumps[pump];
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
            }, oz * this.config.ozInMilis);
        }.bind(this));
    }.bind(this));
};

module.exports = Pi;