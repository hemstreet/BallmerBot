var mongoose = require('mongoose'),
    _ = require('underscore'),
    Q = require('q');

var Database = function (config) {

    this.config = config;

    this.connect();

    //@TODO: fix this poo
    this.drinkModel = mongoose.model('Drink', require('./schemas/Drink'));

};

Database.prototype.connect = function () {
    mongoose.connect('mongodb://' + this.config.dbPath);
};

Database.prototype.find = function(name, query) {
    var deferred = Q.defer();
    var Model = this.getModel(name);

    Model.find(query || {}, function (err, docs) {
        if(err) {
            deferred.reject(err);
        }
        deferred.resolve(docs);
    });

    return deferred.promise;
};

Database.prototype.put = function(name, query) {
    var Model = this.getModel(name);

    this.find(name).then(function(model) {

    });
};

Database.prototype.createModel = function (data) {

    return new this.drinkModel(data);

};

Database.prototype.create = function(name, data) {

    var deferred = Q.defer();
    var instance = this.createModel(data);

    instance.save(function(err) {
        if(err) {
            deferred.reject(err);
            return;
        }

        deferred.resolve(data);
    });

    return deferred.promise;

};

Database.prototype.delete = function(name, query) {
};

module.exports = Database;