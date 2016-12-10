'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
  _id: Number,
  postId: Number,
  name: String,
  email: String,
  body: String
});

module.exports = mongoose.model('Comment', CommentSchema);
