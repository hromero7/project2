var db = require("../models")


module.exports = function (app) {
    app.get("/api/travel", function ( req, res){

        // app.get to join three table information queries
        // var query = {};
        // if (req.query.outbound_originId){
        //     query.qoutesId = req.query.qoutes_id
        // }

    db.Quote.findAll({
        // where: query,
        // include: [{
        //     model: db.Place,
        //     where: db.Place.placeId
        // }]
    }).then(function(dbTravel){
        res.json(dbTravel)
    })
    })

    app.post("/api/travel", function(req,res){
        db.Quote.create(req.body).then(function(dbTravel){
            res.json(dbTravel);
        })
    })

    app.delete("/api/travel/:id",function(req,res){
        db.Quote.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTravel){
            res.json(dbTravel)
        })
    })
}