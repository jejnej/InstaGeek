"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'

}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

//GETS =================================

// Home page
app.get("/", (req, res) => {
  res.render("index");
});


//Route to the "/home" page to hold "link cards" for the user
app.get("/home", (req, res) => {

console.log("welcome home");

});

//topic filter page
app.get("/topic/:topicname", (req, res) => {

});
//Collection of the users posts and liked link cards
app.get("/myresources", (req, res) => {

});

//Gives the user a list of their posts with the option to delete
app.get("/myposts", (req, res) => {

});

//A link to the card on a standalone site to allow people to comment
app.get("/resource/:resid", (req, res) => {

});

//POSTS =================================

//For the user to create linke post
app.post("/create", (req, res) => {

});

//For the user to like a post
app.post("/like", (req , res) => {

});

//For the user to comment and view comments on a post
app.post("/comment", (req, res) => {

});

//For the user to rate a post ----- need to discuess
app.post("/rate", (req, res) => {


});

//For the user to view user info --- need to update as well... should be PUT
app.post("/userinfo", (req, res) => {

});

//=================================

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
