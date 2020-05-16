const express = require("express");
<<<<<<< HEAD
const path = require("path");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + "/public"));

// Set Handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them

var routes = require("./routes/api-routes");

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
=======

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
>>>>>>> 609a67aa22fb222efa5827e8eaa5763040999a2a
