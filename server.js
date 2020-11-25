// Express is for building the Rest apis
const express = require("express");
// body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// cors provides Express middleware to enable CORS with various options
const cors = require("cors");
// create an Express app
const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

// add body-parser and cors middlewares using app.use() method
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// const controller = require("./app/controllers/tutorial.controller");
const run = async () => {};
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   run();
// });
db.sequelize.sync();

// simple route
app.get("/", (request, response) => {
  response.json("I am building node api");
});

require("./app/routes/tutorial.route")(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
