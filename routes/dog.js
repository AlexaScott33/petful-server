'use strict';

const express = require('express');
const router = express.Router();

const dog = require('../db/dogs');

/* ========== GET/READ ALL ITEMS ========== */
router.get('/dog', (req, res) => {
  return res.json(dog[0]);
});

/* ========== DELETE/REMOVE  ========== */
router.delete('/dog', (req, res) => {
  dog.splice(0, 1);
  res.status(204).end();
});


module.exports = router;