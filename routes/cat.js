'use strict';

const express = require('express');
const router = express.Router();

// cat array - contains 3
const cat = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg', 
    imageDescription: 'A friendly kitty.',
    name: 'Milo',
    sex: 'Male',
    age: 5,
    breed: 'British Shorthair',
    story: 'Found in neighborhood'
  },
  {
    imageURL:'http://cdn1-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-8.jpg', 
    imageDescription: 'Very fluffy white cat, who loves to cuddle.',
    name: 'Kitty',
    sex: 'Female',
    age: 1,
    breed: 'Persian',
    story: 'Brought in by someone'
  }
];

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