const express = require('express');
const routes = require('./Routes/PostsRoute');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use('/', routes);

module.exports = app;
