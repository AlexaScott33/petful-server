'use strict';

const express = require('express');
const router = express.Router();

const dogQueue = require('../Queue/dog-queue');
const peek = require('../Queue/helper-functions');
const dogData = require('../db/dogs');


/* ========== GET/READ ALL ITEMS ========== */
router.get('/dog', (req, res) => {
  res.json(peek(dogQueue));
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/dog', (req, res) => {
  dogQueue.dequeue();

  if(!dogQueue.first) {
    dogData.map(dog => dogQueue.enqueue(dog));
  }
  res.status(204).end();
});


module.exports = router;