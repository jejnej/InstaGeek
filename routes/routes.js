'use strict';

const ogParser = require("og-parser");
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser') //cookie parser added
router.use(cookieParser()); // cookie parser added

module.exports = (knex) => {

  //GETS =================================

  // Home page
  router.get("/", (req, res) => {

    if (req.cookies.id) {
      res.redirect("/home");
    } else {
      res.render("index");
    }
  });


  //Route to the "/home" page to hold "link cards" for the user
  router.get("/home", (req, res) => {

    console.log('cookie', req.cookies.id);
    if (!req.cookies.id) {
      res.redirect('/');
    } else {
      console.log("welcome home");
      res.render("home");
    }
  });

  router.get("/all", (req, res) => {
    knex.raw(
      'WITH "likesPerResource" AS (SELECT "resources"."id", COUNT( "likes".* ) FROM "public"."likes" "likes" RIGHT OUTER JOIN "public"."resources" "resources" ON "likes"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ' , "avgRatingsPerResource" AS (SELECT "resources"."id", AVG( "ratings"."rating_value" ) "avgRating" FROM "public"."ratings" "ratings", "public"."resources" "resources" WHERE "ratings"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ` , "userratings" AS (SELECT * FROM "public"."ratings" "ratings" WHERE "user_id" = '${req.cookies.id}')`
      + ' SELECT "resources"."id", "rusers"."handle" "user", "resources"."title", "resources"."image_url" "imageUrl", "resources"."url" "articleUrl", "resources"."description", "likesPerResource"."count" "likes", "avgRatingsPerResource"."avgRating", "userratings"."rating_value" "userRating" FROM "public"."resources" "resources"'
      + ' LEFT OUTER JOIN "likesPerResource" ON "resources"."id" = "likesPerResource"."id"'
      + ' LEFT OUTER JOIN "avgRatingsPerResource" ON "resources"."id" = "avgRatingsPerResource"."id"'
      + ' LEFT OUTER JOIN "userratings" ON "userratings"."resource_id" = "resources"."id", "public"."rusers" "rusers"'
      + ' WHERE "rusers"."id" = "resources"."creator_id"'
      + ' ORDER BY "resources"."id" DESC'
    ).then((results) => {
      res.json(results.rows);
    })
      .catch(err => {
        console.log('/all error');
        res.redirect('/');
      });
  });

  router.get("/search", (req, res) => {
    if (!req.query.searchfield) {
      res.status(400).send('invalid search');
    } else {
      knex.raw(
        'WITH "likesPerResource" AS (SELECT "resources"."id", COUNT( "likes".* ) FROM "public"."likes" "likes" RIGHT OUTER JOIN "public"."resources" "resources" ON "likes"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
        + ' , "avgRatingsPerResource" AS (SELECT "resources"."id", AVG( "ratings"."rating_value" ) "avgRating" FROM "public"."ratings" "ratings", "public"."resources" "resources" WHERE "ratings"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
        + ` , "userratings" AS (SELECT * FROM "public"."ratings" "ratings" WHERE "user_id" = '${req.cookies.id}')`
        + ' SELECT "resources"."id", "rusers"."handle" "user", "resources"."title", "resources"."image_url" "imageUrl", "resources"."url" "articleUrl", "resources"."description", "likesPerResource"."count" "likes", "avgRatingsPerResource"."avgRating", "userratings"."rating_value" "userRating" FROM "public"."resources" "resources"'
        + ' LEFT OUTER JOIN "likesPerResource" ON "resources"."id" = "likesPerResource"."id"'
        + ' LEFT OUTER JOIN "avgRatingsPerResource" ON "resources"."id" = "avgRatingsPerResource"."id"'
        + ' LEFT OUTER JOIN "userratings" ON "userratings"."resource_id" = "resources"."id", "public"."rusers" "rusers"'
        + ` WHERE "rusers"."id" = "resources"."creator_id" AND "resources"."title" LIKE '%${req.query.searchfield.toLowerCase()}%'`
        + ' ORDER BY "resources"."id" DESC'
      ).then((results) => {
        res.json(results.rows);
      })
        .catch(err => {
          console.log('/search error');
          res.redirect('/');
        });
    }
  });

  //topic filter page
  router.get("/subject/:subjectname", (req, res) => {
    knex.raw(
      'WITH "likesPerResource" AS (SELECT "resources"."id", COUNT( "likes".* ) FROM "public"."likes" "likes" RIGHT OUTER JOIN "public"."resources" "resources" ON "likes"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ' , "avgRatingsPerResource" AS (SELECT "resources"."id", AVG( "ratings"."rating_value" ) "avgRating" FROM "public"."ratings" "ratings", "public"."resources" "resources" WHERE "ratings"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ` , "userratings" AS (SELECT * FROM "public"."ratings" "ratings" WHERE "user_id" = '${req.cookies.id}')`
      + ' SELECT "resources"."id", "rusers"."handle" "user", "resources"."title", "resources"."image_url" "imageUrl", "resources"."url" "articleUrl", "resources"."description", "likesPerResource"."count" "likes", "avgRatingsPerResource"."avgRating", "userratings"."rating_value" "userRating" FROM "public"."resources" "resources"'
      + ' LEFT OUTER JOIN "subjects" ON "resources"."subject_id" = "subjects"."id"'
      + ' LEFT OUTER JOIN "likesPerResource" ON "resources"."id" = "likesPerResource"."id"'
      + ' LEFT OUTER JOIN "avgRatingsPerResource" ON "resources"."id" = "avgRatingsPerResource"."id"'
      + ' LEFT OUTER JOIN "userratings" ON "userratings"."resource_id" = "resources"."id", "public"."rusers" "rusers"'
      + ` WHERE "rusers"."id" = "resources"."creator_id" AND "subjects"."name" = '${req.params.subjectname}'`
      + ' ORDER BY "resources"."id" DESC'
    ).then((results) => {
      res.json(results.rows);
    })
      .catch(err => {
        res.redirect('/');
      });
  });

  //Collection of the users posts and liked link cards
  router.get("/myresources", (req, res) => {
    knex.select('*').from('resources').where('creator_id', req.cookies.id).union(function () {
      this.select('resources.*').from('resources').innerJoin('likes', 'resources.id', 'likes.resource_id').where('likes.user_id', req.cookies.id);
    })
      .then((rows) => {
        res.json(rows);
      })
      .catch(err => {
        res.redirect('/');
      });
  });

  //Gives the user a list of their posts with the option to delete
  router.get("/myposts", (req, res) => {
    knex('resources').where('creator_id', req.cookies.id).select('*')
      .then((rows) => res.json(rows))
      .catch((err) => {
        console.log(err);
        res.redirect('/');
      });
  });

  //A link to the card on a standalone site to allow people to comment
  router.get("/resource/:resid", (req, res) => {
    knex.raw(
      'WITH "likesPerResource" AS (SELECT "resources"."id", COUNT( "likes".* ) FROM "public"."likes" "likes" RIGHT OUTER JOIN "public"."resources" "resources" ON "likes"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ', "avgRatingsPerResource" AS (SELECT "resources"."id", AVG( "ratings"."rating_value" ) "avgRating" FROM "public"."ratings" "ratings", "public"."resources" "resources" WHERE "ratings"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + 'SELECT "resources"."id", "rusers"."handle" "user", "resources"."title", "resources"."image_url" "imageUrl", "resources"."url" "articleUrl", '
      + '"resources"."description", "likesPerResource"."count" "likes", "avgRatingsPerResource"."avgRating"'
      + 'FROM "public"."resources" "resources" '
      + 'LEFT OUTER JOIN "likesPerResource" ON "resources"."id" = "likesPerResource"."id" '
      + 'LEFT OUTER JOIN "avgRatingsPerResource" ON "resources"."id" = "avgRatingsPerResource"."id" '
      + ', "public"."rusers" "rusers" '
      + `WHERE "rusers"."id" = "resources"."creator_id" AND "resources"."id" = ${req.params.resid}`
      + ' ORDER BY "resources"."id" DESC'
    ).then(results => {
      res.json(results.rows);
    });
  });

  // comments associated with a given resource
  router.get("/comments/:resid", (req, res) => {
    knex.select('comment_text', 'handle as user')
      .from('comments').innerJoin('resources', 'resources.id', 'comments.resource_id').innerJoin('rusers', 'rusers.id', 'comments.user_id')
      .where('resources.id', req.params.resid)
      .then((results) => res.json(results))
      .catch(err => res.status(404).send('no comments'));
  });

  router.get("/profile", (req, res) => {

    let userCookie = req.cookies.id
    console.log('userCookie', userCookie);

    knex('rusers').where('id', userCookie)
      .then(rows => rows.forEach(function (person) {
        let variables = { user: person.handle, email: person.email, password: person.password }
        res.render("user_profile", variables);
      }))
      .catch(err => {
        res.redirect('/');
      });
  });


  //POSTS =================================

  // login page.
  router.post("/login", (req, res) => {


    console.log(req.body.username); // I can see the username
    console.log(req.body); // I can see the password

    //just set user and pass to the request body pieces
    let enterUser = req.body.username;
    let enterPass = req.body.password;

    //check to see if password or user blank
    if (!enterUser || !enterPass) {
      console.log("Please enter a username or password");
    } else {

      knex('rusers').where('handle', enterUser) //double check this!
        .then(([person]) => {
          //need to check req with database to see if user is correct
          if (enterUser === person.handle && enterPass === person.password) {
            console.log('setting cookie', 'id', person.id);
            res.cookie("id", person.id);
            console.log("about to redirect");
            res.redirect("/home");
          } else {
            res.status(401).send('failed to authenticate');
          }
        })
        .catch(() => res.status(401).send('failed to authenticate'));
    }
  });



  //For the User to Register a signup

  router.post("/register", (req, res) => {

    let newEmail = req.body.new_email;
    let newUsername = req.body.new_username;
    let newPassword = req.body.new_password;

    if (!newEmail || !newUsername) {
      console.log("Invalid Entry");
    }
    else {


      //add the user email to database
      //add the handle (username) to database
      //add the password to database

      knex('rusers')
        .insert({
          email: newEmail,

          handle: newUsername,
          password: newPassword
          })
        .returning('id')
        .then(function(result) {
          res.cookie("id", result[0]).redirect('/home');
        });

      console.log("Login created!");
    }
  })



  router.post("/resource/create", (req, res) => {

    let newSubject = req.body.new_subject;
    let newURL = req.body.new_url;
    let userID = req.cookies.id;
    let imgurl = "https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg";
    let description = "No Description";
    let title = "No Title";

    ogParser(newURL, function (error, data) {
      console.log('OGOGOG:', data.og);
      if (data.og) {
        console.log ('data.og OK');
        if (data.og.image) {
          if (imgurl[0] === '/') {
            imgurl = data.og.image.url;
            imgurl = data.og.url.substr(0, data.og.url.slice(8).search("/") + 8) + imgurl;
          }
        }
        console.log ('DESC:', data.og.description);
        console.log ('TOTLE:', data.og.title);
        description = data.og.description ? data.og.description.length > 250 ? data.og.description.substring(0, 250) + "..." : data.og.description : "No Description";
        title = data.og.title || "No Title";
      }
      knex.select('id').from('subjects').where('name', newSubject)
        .then(([data]) => {
          console.log('subject found: ', data, data.id);
          console.log(newURL,
            title,
            description,
            imgurl,
            userID,
            data.id);

          return knex('resources').insert({
            url: newURL,
            title: title,
            description: description,
            image_url: imgurl,
            creator_id: userID,
            subject_id: data.id
          })
        })
        .then(() => res.redirect("/home"))
        .catch((err) => {
          console.log(err);
          res.status(400).send(err);
        })
    })
  });

  //For the user to like a post
  router.put("/resource/:resid/like", (req, res) => { //OR PUTS?
    if (err) {
      res.status(500).json({
        error: err.message
      });
    } else {
      res.status(201).send();
    }
    //get the post request from the link button

  });

  //For the user to comment and view comments on a post
  router.put("/resource/:resid/comment", (req, res) => { //OR PUTS???

    //get the post request from comment button

  });

  //For the user to rate a post ----- need to discuess
  router.post("/resource/:resid/rating", (req, res) => { //OR PUTS??

    //get post request

  });

  router.delete("/logout", (req, res) => {
    res.clearCookie("id").redirect("/");
  });

  //PUT =================================

  router.post("/profile/update", (req, res) => {

    let updateUser = req.body.updateUser
    let updatePass = req.body.updatePass
    let updateEmail = req.body.updateEmail
    let userCookie = req.cookies.id

    knex('rusers')
      .where('id', '=', userCookie) //Handle or ID?
      .update({
        email: updateEmail,
        password: updatePass,
        handle: updateUser
      }).then();
    res.redirect("/profile");
  })

  return router;
}
