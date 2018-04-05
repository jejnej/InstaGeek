"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./db/knexfile");
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
res.render("home");

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

app.post("/" , (req, res) => {


  console.log(req.body.username); // I can see the username
  console.log(req.body); // I can see the password

  //just set user and pass to the request body pieces
  let enterUser = req.body.username;
  let enterPass = req.body.password;

  //check to see if password or user blank
  if(!enterUser || !enterPass){
    console.log("Please enter a username or password");
  } else {

    //practice using the seed data in 'users'

    knex('users').where('name', enterUser)
      .then(rows => rows.forEach(function(person){

  //need to check req with database to see if user is correct
        if(enterUser === person.name){
        res.redirect("/home");
        console.log("you're in!")
        } else {
        console.log("user does not exist");
        }
      }));
    }

  //need to check req with database to see if password is correct
  //if correct then login and render home page

});

//For the User to Register a signup

app.post("/register", (req, res) => {

  let newEmail = req.body.user_email;
  let newUsername = req.body.new_username;
  let newPassword = req.body.new_password;

  if(!newEmail || !newUsername){
    console.log("Invalid Entry");
  }



//add the user email to database
//add the handle (username) to database

//add the password to database


})

//For the user to create link post
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
