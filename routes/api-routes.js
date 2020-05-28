var db = require("../models")
var axios = require("axios")


module.exports = function (app) {
    app.get("/api/travel", function (req, res) {

        // app.get to join three table information queries
        // var query = {};
        // if (req.query.outbound_originId){
        //     query.qoutesId = req.query.qoutes_id
        // }
        db.Quote.findAll({
            // where: query,
            include: [{
                model: db.Place,
                // where: db.Place.placeId
            }]
        }).then(function (dbTravel) {
            res.json(dbTravel)
        });
    });

    //place api route
    app.get("/api/place", function (req, res) {
        db.Place.findAll({}).then(function (dbPlace) {
            res.json(dbPlace);
        });
    });

    //carrier api route

    app.get("/api/carrier", function (req, res) {
        db.Carrier.findAll({}).then(function (dbCarrier) {
            res.json(dbCarrier);
        });
    });

    //POST ROUTES

    app.post("/api/travel", function (req, res) {
        db.Quote.create(req.body).then(function (dbTravel) {
            res.json(dbTravel);
        });
    });

    // route to qoutes table
    app.post("/api/price", function (req, res) {
        db.Place.create(req.body).then(function (dbPlace) {
            res.json(dbPlace);
        });
    });
    // route to carrier table
    app.post("/api/carrier", function (req, res) {
        db.Carrier.create(req.body).then(function (dbCarrier) {
            res.json(dbCarrier);
        });
    });

    app.post("/api/axios", function (req, res) {
        axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${req.body.origin}/USD/en-US/?query=${req.body.destination}`, {
            headers: {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "32fc3296c6mshf0fe9b6337eb5a9p1804a9jsnf2f36e2db290"
            }
        }).then(function (response) {
            axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/${response.Places.CountryId}/${req.body.inbound}?inboundpartialdate=${req.body.outbound}`, {
                headers: {
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "x-rapidapi-key": "32fc3296c6mshf0fe9b6337eb5a9p1804a9jsnf2f36e2db290"
                }
            }).then(function (data) {
                console.log(data);
                res.render("saved", data);
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    })

    // route to qoutes table
    app.post("/api/price", function (req, res) {
        db.qoutes.create(req, body).then(function (dbTravel) {
            res.json(dbTravel);
        })
    })
    // route to carrier table
    app.post("/api/carrier", function (req, res) {
        db.carriers.create(req, body).then(function (dbTravel) {
            res.json(dbTravel);
        })
    })



    app.delete("/api/travel/:id", function (req, res) {
        db.Quote.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTravel) {
            res.json(dbTravel)
        })
    })
}