const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  videos: [{
    type: String,
    required: false
  }]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
//post.js
