const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PostsSchema = new mongoose.Schema({
  title: String,
  author: String,
  desc: String
});

module.exports = mongoose.model('posts', PostsSchema);
