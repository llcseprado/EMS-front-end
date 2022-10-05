const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Parsing middleware
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Static files
app.use("/public", express.static("public"));

//Templating engine (includes here partials)
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");

//Routing is at user.js
const routes = require("./server/routes/user");
app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
