'use strict';

const ogParser = require("og-parser");
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser') //cookie parser added
router.use(cookieParser()); // cookie parser added

module.exports = (knex) => {

  //GETS =================================
  /*  As a knex novice, I eventually had to cut my losses time-wise and fall back to SQL for the most complex queries.
      This string sets the pattern for the queries that populate the main resource pages.
      'user' is a parameter because it represents the logged-in user at runtime. */
  const masterQueryString = (user) => {
    return 'WITH "likesPerResource" AS (SELECT "resources"."id", COUNT( "likes".* ) FROM "public"."likes" "likes" RIGHT OUTER JOIN "public"."resources" "resources" ON "likes"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ' , "avgRatingsPerResource" AS (SELECT "resources"."id", AVG( "ratings"."rating_value" ) "avgRating" FROM "public"."ratings" "ratings", "public"."resources" "resources" WHERE "ratings"."resource_id" = "resources"."id" GROUP BY "resources"."id")'
      + ` , "userratings" AS (SELECT * FROM "ratings" WHERE "user_id" = '${user}')`
      + ` , "userlikes" AS (SELECT 1 AS liked, resource_id FROM "likes" WHERE "user_id" = '${user}')`
      + ` SELECT "resources"."id", "rusers"."handle" "user", "resources"."title", "resources"."image_url" "imageUrl", "resources"."url" "articleUrl", "resources"."description", "likesPerResource"."count" "likes", "avgRatingsPerResource"."avgRating", "userratings"."rating_value" "userRating", userlikes.liked `
      + ' FROM "resources" '
      + ' LEFT OUTER JOIN "likesPerResource" ON "resources"."id" = "likesPerResource"."id"'
      + ' LEFT OUTER JOIN "avgRatingsPerResource" ON "resources"."id" = "avgRatingsPerResource"."id"'
      + ' LEFT OUTER JOIN "userratings" ON "userratings"."resource_id" = "resources"."id"'
      + ' LEFT OUTER JOIN "userlikes" ON "userlikes"."resource_id" = "resources"."id"'
      + ' LEFT OUTER JOIN "rusers" ON "rusers"."id" = "resources"."creator_id"';
  }


  // Home page
  router.get("/", (req, res) => {
    if (req.cookies.id) {
      res.redirect("/home");
    } else {
      res.render("index", CookieInfo(req));
    }
  });


  //Route to the "/home" page to hold "link cards" for the user
  router.get("/home", (req, res) => {
    if (!req.cookies.id) {
      res.redirect('/');
    } else {
      res.render("home", CookieInfo(req));
    }
  });

  router.get("/all", (req, res) => {
    knex.raw(masterQueryString(req.cookies.id) + ' ORDER BY "resources"."id" DESC')
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => res.status(400).send(err));
  });

  router.get("/search", (req, res) => {
    if (!req.query.searchfield) {
      res.status(400).send('invalid search');
    } else {
      knex.raw(masterQueryString(req.cookies.id)
        + ` WHERE "resources"."title" LIKE '%${req.query.searchfield.toLowerCase()}%'`
        + ' ORDER BY "resources"."id" DESC'
      ).then((results) => {
        res.json(results.rows);
      })
        .catch((err) => res.status(400).send(err));
    }
  });

  //topic filter page
  router.get("/subject/:subjectname", (req, res) => {
    knex.raw(masterQueryString(req.cookies.id)
      + ' LEFT OUTER JOIN "subjects" ON "subjects"."id" = "resources"."subject_id" '
      + ` WHERE "subjects"."name" = '${req.params.subjectname}'`
      + ' ORDER BY "resources"."id" DESC'
    ).then((results) => {
      res.json(results.rows);
    }
    ).catch((err) => res.status(400).send(err));
  });

  //Collection of the users posts and liked link cards
  router.get("/myresources", (req, res) => {
    knex.raw(masterQueryString(req.cookies.id)
      + ` WHERE (resources.creator_id = '${req.cookies.id}' OR userlikes.liked = 1) `
      + ' ORDER BY "resources"."id" DESC'
    ).then((results) => {
      res.json(results.rows);
    }
    ).catch((err) => res.status(400).send(err));
  });

  //A link to the card on a standalone site to allow people to comment
  router.get("/resource/:resid", (req, res) => {
    knex.raw(masterQueryString(req.cookies.id)
      + `WHERE "resources"."id" = ${req.params.resid}`
      + ' ORDER BY "resources"."id" DESC'
    ).then((results) => {
      res.json(results.rows);
    }
  ).catch((err) => res.status(400).send(err));
});

// comments associated with a given resource
router.get("/resource/:resid/comments", (req, res) => {
  knex.select('comment_text', 'handle as user')
    .from('comments').innerJoin('resources', 'resources.id', 'comments.resource_id').innerJoin('rusers', 'rusers.id', 'comments.user_id')
    .where('resources.id', req.params.resid)
    .orderBy('comments.id', 'asc')
    .then((results) => res.status(200).json(results))
  .catch((err) => res.status(400).send(err));
});

router.get("/profile", (req, res) => {
  let userCookie = req.cookies.id
  knex('rusers').where('id', userCookie)
    .then(rows => rows.forEach(function (person) {

      let variables = { cookie: userCookie, user: person.handle, email: person.email, password: person.password, firstname: person.first_name, lastname: person.last_name, city: person.city }

      res.render("user_profile", variables);
    }))
    .catch((err) => res.status(400).send(err));
});


//POSTS =================================

// login page.
router.post("/login", (req, res) => {

  //just set user and pass to the request body pieces
  let enterUser = req.body.username;
  let enterPass = req.body.password;

  //check to see if password or user blank
  if (!enterUser || !enterPass) {
    res.status(401).send('failed to authenticate');
  } else {

    knex('rusers').where('handle', enterUser) //double check this!
      .then(([person]) => {
        //need to check req with database to see if user is correct
        if (enterUser === person.handle && enterPass === person.password) {
          res.cookie("id", person.id);
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
    res.status(401).send('failed to authenticate');
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
      .then(function (result) {
        res.cookie("id", result[0]).redirect('/home');
      });
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
    if (error) {
      res.redirect("/home");  // bad url usually, as far as we know.  As a basic solution, let's just get out of here.
    } else {
      if (data.og) {
        if (data.og.image) {
          imgurl = data.og.image.url;
          if (imgurl[0] === '/') {
            imgurl = data.og.url.substr(0, data.og.url.slice(8).search("/") + 8) + imgurl;
          }
        }
        if (data.og.description) {
          description = data.og.description.length > 250 ? data.og.description.substring(0, 250) + "..." : data.og.description;
        }
        if (data.og.title) {
          title = data.og.title;
        }
      }
      knex.select('id').from('subjects').where('name', newSubject)
        .then(([data]) => {
          return knex('resources').insert({
            url: newURL,
            title: title,
            description: description,
            image_url: imgurl,
            creator_id: userID,
            subject_id: data.id
          });
        })
        .then(() => res.redirect("/home"))
        .catch((err) => res.status(400).send(err));
    }
  })
});

//For the user to like a post
router.post("/resource/:resid/like", (req, res) => { //OR PUTS?
  /* check whether a like already exists for this resource
   * and delete or insert the appropriate record;
   * i.e. toggle the like
   */
  knex('likes').where({
    resource_id: req.params.resid,
    user_id: req.cookies.id
  }).then((likes) => {
    if (likes.length > 0) {
      return knex('likes').where({
        resource_id: req.params.resid,
        user_id: req.cookies.id
      }).del();
    } else {
      return knex('likes')
        .insert({
          resource_id: req.params.resid,
          user_id: req.cookies.id
        });
    }
  }).then(() => res.status(200).send('like toggled'))
    .catch((err) => res.status(400).send(err));
});

//For the user to comment and view comments on a post
router.post("/resource/:resid/comment", (req, res) => { //OR PUTS???
  //get the post request from comment button
  knex('comments').insert({
    comment_text: req.body.comment,
    resource_id: req.params.resid,
    user_id: req.cookies.id
  })
    .then(() => {
      res.status(200).send('comment added');
    })
    .catch((err) => res.status(400).send(err));
});

//For the user to rate a post ----- need to discuess
router.post("/resource/:resid/rating", (req, res) => { //OR PUTS??
  //get post request
  knex('ratings').insert({
    rating_value: req.body.rating,
    resource_id: req.params.resid,
    user_id: req.cookies.id
  })
    .then(() => res.status(200).send('rating added'))
    .catch((err) => res.status(400).send(err));
});


router.post("/logout", (req, res) => {
  res.clearCookie("id").redirect("/");
});

//PUT =================================

router.post("/profile/update", (req, res) => {

  let updateUser = req.body.updateUser;
  let updatePass = req.body.updatePass;
  let updateEmail = req.body.updateEmail;
  let userCookie = req.cookies.id;
  let updateFirst = req.body.userFirst;
  let updateLast = req.body.userLast;
  let updateCity = req.body.userCity;

  knex('rusers')
    .where('id', '=', userCookie) //Handle or ID?
    .update({
      handle: updateUser,
      password: updatePass,
      email: updateEmail,
      first_name: updateFirst,
      last_name: updateLast,
      city: updateCity
    }).then();
  res.redirect("/profile");
})

function CookieInfo(req) {
  let pageInfo = { cookie: req.cookies.id }
  return pageInfo;
}

return router;
}
