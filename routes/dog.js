'use strict';

const express = require('express');
const router = express.Router();

const dogQueue = require('../Queue/dog-queue');
const peek = require('../Queue/helper-functions');


/* ========== GET/READ ALL ITEMS ========== */
router.get('/dog', (req, res) => {
  res.json(peek(dogQueue));
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/dog', (req, res) => {
  dog.splice(0, 1);
  res.status(204).end();
});


module.exports = router;