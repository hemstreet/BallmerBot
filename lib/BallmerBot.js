var BallmerBot = function(config) {
    this.config = config;

    var Pi = require((this.config.debug) ? '../mock/pi' : './pi');
    this.pi = new Pi(config);
};

BallmerBot.prototype.pour = function(pump, oz) {
    this.pi.pour(pump, oz);
};

module.exports = BallmerBot;