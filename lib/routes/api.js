module.exports = function (app, options) {

    var ballmerBot = options.ballmerBot;

    app.get('/pour/:pump/:oz', function (req, res) {

        var pump = req.params.pump,
            oz = req.params.oz;

        ballmerBot.pour(pump, oz);

        res.send({
            message: 'pouring ' + oz + ' oz from pump ' + pump
        });
    });
};