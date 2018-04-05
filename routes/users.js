'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    knex
      .select('url, description, image_url')
      .from('resources')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
