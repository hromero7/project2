var path = require("path");

module.exports = function (app){

    // gets the html page where they can search and save their 
    // travel preferences
    app.get("/", function(req,res){
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    // gets the html page of all the saved information on the database
    app.get("/plans", function(req,res){
        res.sendFile(path.join(_dirname,"../public/plans.html"));
    });

};
