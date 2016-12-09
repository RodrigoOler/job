'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./book.model')

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App Listening on PORT: ${PORT}`);
})
