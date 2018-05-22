'use strict';

const Queue = require('./Queue');
const catData = require('../db/cats');


const catQueue = new Queue();

catData.map(cat => catQueue.enqueue(cat));

module.exports = catQueue;

