var db = require("../models");


module.exports = function (app) {
    const placeCall = ()=> {
        db.Place.findAll({}).then(function(dbPlace) {
           for (let i = 0; i < dbPlace.length; i++) {
            console.log(dbPlace[i].dataValues);
            }
            // console.log(dbPlace[1].dataValues)
        });
        };

    const carrierCall = () => {
        db.Carrier.findAll({}).then(function(dbCarrier) {
            for (let i = 0; i < dbCarrier.length; i++) {
                console.log(dbCarrier[i].dataValues);
            }
        });
    }
            
    
    app.get("/api/travel", function ( req, res){

    // app.get to join three table information queries
    // var query = {};
    // if (req.query.outbound_originId){
    //     query.qoutesId = req.query.qoutes_id
    // }
    db.Quote.findAll({
        // where: query,
       
    }).then(function(dbTravel){
        res.json(dbTravel);
        placeCall();
        carrierCall();
    });
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

  // route to qoutes table
  app.post("/api/price", function (req, res) {
    db.qoutes.create(req, body).then(function (dbTravel) {
      res.json(dbTravel);
    });
  });
  // route to carrier table
  app.post("/api/carrier", function (req, res) {
    db.carriers.create(req, body).then(function (dbTravel) {
      res.json(dbTravel);
    });
  });

  app.delete("/api/travel/:id", function (req, res) {
    db.Quote.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbTravel) {
      res.json(dbTravel);
    });
  });
};
