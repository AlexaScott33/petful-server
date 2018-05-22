'use strict';

const express = require('express');
const router = express.Router();

// dog array - contains 3
const dog = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://www.bcskinvet.com/storage/app/media/heroimage.jpg',
    imageDescription: 'A golden pitbull with a white stripe,',
    name: 'Harper',
    sex: 'Female',
    age: 1,
    breed: 'Pitbull',
    story: 'Looking for a friendly home.'
  },
  {
    imageURL: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/1-puppy.jpg',
    imageDescription: 'A black and white frenchie who is all bark.',
    name: 'Polo',
    sex: 'Male',
    age: 5,
    breed: 'French Bulldog',
    story: 'Owner was allergic.' 
  }
];

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