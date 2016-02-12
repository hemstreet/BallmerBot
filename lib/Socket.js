"use strict";

var _ = require('underscore');

var Socket = function (io, ballmerBot) {
    this.io = io;
    this.ballmerBot = ballmerBot;

    this.setupListeners();
};

Socket.prototype.setupListeners = function () {

    this.io.on('connection', function (socket) {

        console.log('User Connected');

        socket.on('DRINK:WillPourDrink', function(pump, oz) {

            // Run multiple pour's, run promise's all[promise, promise].then to fire finished event,
            // change variable from pouring to done
            this.ballmerBot.pour(pump, oz);
        }.bind(this))
        socket.on('disconnect', function() {
            console.log('User Disconnected');
        });
    }.bind(this));

};

module.exports = Socket;