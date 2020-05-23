var db = require("../models")


module.exports = function (app) {
    app.get("/api/travel", function ( req, res){

        // app.get to join three table information queries
        var query = {};
        if (req.query.qoutes_id){
            query.qoutesId = req.query.qoutes_id
        }

    db.places.findAll({
        where: query,
        include: [{
            model: db.qoutes
        }]
    }).then(function(dbTravel){
        res.json(dbTravel)
    })
    })


    // fix post api route, errorin posting to database
    app.post("/api/travel", function(req,res){
        db.places.create(req,body).then(function(dbTravel){
            res.json(dbTravel);
        })
    })

    // route to qoutes table
    app.post("/api/price", function(req,res){
        db.qoutes.create(req,body).then(function(dbTravel){
            res.json(dbTravel);
        })
    })
    // route to carrier table
    app.post("/api/carrier", function(req,res){
        db.carriers.create(req,body).then(function(dbTravel){
            res.json(dbTravel);
        })
    })



    app.delete("/api/travel/:id",function(req,res){
        db.places.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTravel){
            res.json(dbTravel)
        })
    })
}