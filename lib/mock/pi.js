var Pi = function(config) {
    this.config = config;
};

Pi.prototype.pour = function(pump, oz) {
    this.log('Pouring ' + oz + ' oz from pump ' + pump);
};

Pi.prototype.log = function(msg) {
    console.log('MOCK: ', msg);
};

module.exports = Pi;
