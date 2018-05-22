'use strict';

const express = require('express');
const router = express.Router();

const catQueue = require('../Queue/cat-queue');
const peek = require('../Queue/helper-functions');
const catData = require('../db/cats');

/* ========== GET/READ  ========== */
router.get('/cat', (req, res) => {
  res.json(peek(catQueue));
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/cat', (req, res) => {
  catQueue.dequeue();

  if(!catQueue.first) {
    catData.map(cat => catQueue.enqueue(cat));
  }
  res.status(204).end();
});


module.exports = router;