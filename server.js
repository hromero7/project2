const express = require("express");
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

var routes = require("./routes/api_routes");

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
