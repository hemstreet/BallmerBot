var BallmerBot = function() {
};

BallmerBot.prototype.pour = function(pump, oz) {
    this.mock('Pouring' + oz + 'oz from ' + pump);
}

BallmerBot.prototype.mock = function(message) {
    console.log("MOCK", message);
}

module.exports = BallmerBot;