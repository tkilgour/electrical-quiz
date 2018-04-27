require("dotenv").config();

//first we import our dependencies...
const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");

//and create our instances
const app = express();
const router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.PORT || 8081;
// const user = process.env.DB_USER;
// const pass = process.env.DB_PASS;

const rawData = fs.readFileSync("./data/quiz.json");
const quizJSON = JSON.parse(rawData);

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  //and remove cacheing so we get the most recent parties
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//db config
// mongoose.connect(
//   `mongodb://${user}:${pass}@ds117888.mlab.com:17888/wedding-management`
// );

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// simulate server latency
app.use((req, res, next) => setTimeout(next, 1000))

// API

router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/quiz", function(req, res) {
  res.json(quizJSON);
});

//Use our router configuration when we call /api
app.use("/api", router);

//starts the server and listens for requests
app.listen(port, () => console.log(`api running on port ${port}`));