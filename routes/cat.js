'use strict';

const express = require('express');
const router = express.Router();

const catQueue = require('../Queue/cat-queue');
const peek = require('../Queue/helper-functions');

/* ========== GET/READ  ========== */
router.get('/cat', (req, res) => {
  res.json(peek(catQueue));
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/cat', (req, res) => {
  cat.splice(0, 1);
  res.status(204).end();
});


module.exports = router;