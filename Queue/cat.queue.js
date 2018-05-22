'use strict';

const { Queue, peek } = require('./Queue');
const catData = require('../db/cats');


const catQueue = new Queue();

catData.map(cat => catQueue.enqueue(cat));

console.log(peek(catQueue));
