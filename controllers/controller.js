const express = require("express");
const router = express.Router();

const project = require("../models/project.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("main");
  res.render("main.handlebars");
});

// use axios to render information to handlebars and have it thrown into the main page


router.get("/main", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  //   burger.all(function(burgerData) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  res.render("index");
  //   });
});

module.exports = router;
