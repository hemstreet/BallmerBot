"use strict";

var Mixologist = function(ballmerBot) {
    this.ballmerBot = ballmerBot;
};

Mixologist.prototype.togglePinWithDelay = function(pin, milis) {
    this.ballmerBot.mock('Toggling pin ' + pin + 'for ' + milis + ' milliseconds');
};

module.exports = Mixologist;