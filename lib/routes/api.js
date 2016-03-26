module.exports = function (app, options) {
    var db = options.db,
        ballmerBot = options.ballmerBot;

    app.post('/add/drink', function (req, res) {

        var modelName = req.body.modelName,
            name = req.body.name,
            proportions = JSON.parse(req.body.proportions);

        db.create(modelName, {
            name: name,
            proportions: proportions
        }).then(function(data) {
            res.send({
                error: false,
                message: 'added bottle'
            });
        }).fail(function(err) {
            res.send({
                error: true,
                message: 'Failed adding bottle'
            });
        });



    });

    app.get('/add/:bottle/:pump', function (req, res) {

        var bottle = req.params.bottle,
            pump = req.params.pump;

        db.create('Bottle', {
            name: bottle,
            pump: pump
        }).then(function(data) {
            res.send({
                error: false,
                message: 'added bottle'
            });
        }).fail(function(err) {
            res.send({
                error: true,
                message: 'Failed adding bottle'
            });
        });
        // Show form to enter bottle data
        // check for duplicate bottle names ( lowercase )

        res.send({
            message: 'added bottle ' + bottle + ' at pump ' + pump
        });

    });

    app.get('/bottles', function (req, res) {

        // Web request to mongo server for all drinks including [drinks]
        // return data
        var bottles = {
            "pineapple juice": 0,
            "coconut cream": 1,
            "rum": 2,
            "vodka": 3,
            "gin": 4
        };


        res.send({
            message: bottles
        });

    });


    app.get('/getAvailableDrinks', function (req, res) {
        // Web request to mongo server for all drinks including [drinks]
        // return data

        res.send({
            message: {
                "pain killer": {
                    "pineapple juice": 2,
                    "coconut cream": 1,
                    "rum": 2
                },
                "test drink": {
                    "juice": 2,
                    "cream": 1,
                    "gin": 2
                }
            }

        });

    });

    app.get('/pour/:recipeName', function (req, res) {

        var recipeName = req.params.recipeName;

        // get request for /getAvailableDrinks then match to recipeName
        // drinks[recipeName]
        // for each items pass it value
        //ballmerBot.pour(pump, oz);

        // Sorry for partying
        res.send({
            message: 'pouring ' + recipeName
        });
    });

    app.get('/pour/:pump/:oz', function (req, res) {

        var pump = req.params.pump,
            oz = req.params.oz;

        ballmerBot.pour(pump, oz);

        // Sorry for partying
        res.send({
            message: 'pouring ' + oz + ' oz from pump ' + pump
        });
    });
};