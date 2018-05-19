'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

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

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// get first cat in array
app.get('/api/cat', (req, res) => {
  return res.json(cat[0]);
});

// get first dog in array
app.get('/api/dog', (req, res) => {
  return res.json(dog[0]);
});

// delete first cat in array
app.delete('/api/cat', (req, res) => {
  cat.splice(0, 1);
  res.status(204).end();
});

// delete first dog in array
app.delete('/api/dog', (req, res) => {
  dog.splice(0, 1);
  res.status(204).end();
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
