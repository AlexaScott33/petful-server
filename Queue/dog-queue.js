'use strict';

const Queue = require('./Queue');
const dogData = require('../db/dogs');


const dogQueue = new Queue();

dogData.map(dog => dogQueue.enqueue(dog));

module.exports = dogQueue;