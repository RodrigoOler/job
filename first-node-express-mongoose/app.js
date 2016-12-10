'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express(),
  Comment = require('./models/Comment.model');

mongoose.connect('mongodb://localhost/example');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }));

mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    console.log('Database connected success!');
  })

app.get('/', (req, res) => {
  res.send('Happy to be here');
});

app.get('/comments', (req, res) => {
  Comment.find((err, comments) => {
    if (!err) {
      res.json(comments);
    } else {
      return console.error(err)
    }
  })
});

app.get('/comments/:_id', (req, res) => {
  Comment.findOne({
    _id: req.params._id
  }, (err, comments) => {
    if (!err) {
      res.json(comments)
    } else {
      return console.error(err)
    }
  });
});

app.post('/comment', (req, res) => {
  Comment.create(req.body, (err, comment) => {
    if (!err) {
      res.json(comment)
    } else {
      return console.error(err)
    }
  });
});

app.put('/comment/:_id', (req, res) => {
  Book.findOneAndUpdate({
    _id: req.body._id
  }, {
    $set: {
      title: reqq.body.title
    }
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App Listening on PORT: ${PORT}`);
});
