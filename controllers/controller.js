const express = require("express");
const router = express.Router();
const project = require("../models/project.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/main");
//   res.render("main");
});

// renders the search result query
router.get("/main",function(req,res){
  var hbsObject = {
    qoute: data
  }
  console.log(hbsObject)
})


router.get("/main", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  //   burger.all(function(burgerData) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  res.render("index");
  //   });
});

module.exports = router;
