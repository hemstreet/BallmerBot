var mongoose = require('mongoose'),
    _ = require('underscore'),
    q = require('q');

var Mongoose = function (config) {
    mongoose.connect(config.db, function (err) {
        if (err) {
            console.log(err);
        }
    });

    this.drinkModel = mongoose.model('Drink', {
        name: String
    });

};

Mongoose.prototype.getInventory = function () {
    var deferred = q.defer();

    this.read().then(function (data) {
        deferred.resolve(data);
    });

    return deferred.promise;
};

Mongoose.prototype.getAvailableDrinks = function() {
    var deferred = q.defer();

    this.read().then(function (data) {
        deferred.resolve(data);
    });

    return deferred.promise;
};


Mongoose.prototype.create = function (data) {
    var deferred = q.defer();

    var drink = new this.drinkModel(data);

    drink.save(function (err) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(drink);
        }
    });

    return deferred.promise;
};

Mongoose.prototype.read = function (data) {
    var deferred = q.defer(),
        query = data || {};

    this.drinkModel.find(query, function (err, results) {
        if (err) {
            deferred.reject(err);
        }

        deferred.resolve(results);
    });

    return deferred.promise;
};


Mongoose.prototype.update = function (id, data) {
    var deferred = q.defer();

    this.drinkModel.findById(id, function (err, drink) {
        if (err) {
            deferred.reject(err);
        }

        _.extend(drink, data);

        // save the user
        drink.save(function (err) {
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(drink);

        });

    });

    return deferred.promise;
};

Mongoose.prototype.delete = function (query) {
    var deferred = q.defer();

    this.drinkModel.find(query, function (err, drink) {
        if (err) {
            deferred.reject(err);
        }

        // delete him
        drink.remove(function (err) {
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(drink);
        });
    });

    return deferred.promise;
};


module.exports = Mongoose;