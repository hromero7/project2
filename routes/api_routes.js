var db = require("../models");

module.exports = function (app) {
  var query = {};
  if (require.query.travel_id) {
    query.travel_id = req.query.travel_id;
  }
};
