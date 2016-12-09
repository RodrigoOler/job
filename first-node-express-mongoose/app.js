'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Book = require('./Book.model'),
    app = express(),
    db = 'mongodb://localhost/example'

mongoose.connect(db);

const PORT = 3000;

// app.get('/', () => {
//   res.send('Happy to be here');
// });

app.listen(PORT, () => {
    console.log(`App Listening on PORT: ${PORT}`);
});
