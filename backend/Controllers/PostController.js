const mongoose = require('mongoose');
const Posts = mongoose.model('posts');
const chalk = require('chalk');

exports.baseRoute = async (req, res) => {
  res.send('Server Running, send data with arguments: title, author, desc');
};

exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
  console.log(chalk.bold.magenta("showing all posts"));
};

exports.createPost = async (req, res) => {
  await new Posts(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post created",
        data,
      });
      console.log(chalk.bold.green("created 1 post"));
    }
  });
};

exports.getPost = async (req, res) => {
  let postID = req.params.id;
  await Posts.findById({_id: postID}, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      });
    } else {
      res.status(200).json({
        message: "Post found",
        data
      });
      console.log(chalk.bold.magenta("showing post with id: " +req.params.id));
    }
  });
};

exports.updatePost = async (req, res) => {
  await Posts.findByIdAndUpdate({_id: req.params.id}, {$set : req.body}, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      });
      console.log(chalk.bold.bgYellow(err));
    } else {
      res.status(200).json({
        message: "Post updated",
        data: req.body
      });
      console.log(chalk.bold.yellow("updated post with id: " +req.params.id));
    }
  });
};

exports.deletePost = async (req, res) => {
  await Posts.findOneAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Post deleted"
      });
      console.log(chalk.bold.red("deleted post with id: " +req.params.id));
    }
  });
};
