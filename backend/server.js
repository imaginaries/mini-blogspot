const chalk = require('chalk');
const mongoose = require('mongoose');
require('./Models/Posts');
require('dotenv').config({path: '.env'});

// Database connection
mongoose.connect(process.env.DATABASE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });

mongoose.Promise = global.Promise; // ES6 promises
mongoose.connection.on('connected', () => {
  console.log(chalk.bold.blue("Connected to database successfully"));
})
mongoose.connection.on('error', (err) => {
  console.error(`Database connection error`)
})

const app = require('./app');

const server = app.listen(3000, () => {
  console.log(chalk.bold.white('listening on ' +server.address().port));
});
