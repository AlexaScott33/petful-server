'use strict';

const express = require('express');
const router = express.Router();

const cat = require('../db/cats');

const Queue = require('../Queue/Queue');

/* ========== GET/READ  ========== */
router.get('/cat', (req, res) => {

  return res.json(cat[0]);
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/cat', (req, res) => {
  cat.splice(0, 1);
  res.status(204).end();
});


module.exports = router;