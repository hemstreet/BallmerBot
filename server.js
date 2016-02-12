var gpio = require('pi-gpio-promise');
var config = require('./config/config');
var _ = require('underscore');
var pumps = [];

_.each(config.pumps, function(value, key) {
    //
    pumps[key] = gpio.open(value, "output");
});

