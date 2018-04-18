const mongoose = require('mongoose');

// Import environment variables
require('dotenv').config({ path: '.env' });

// Connect to database and handle any bad connections
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error ${err}`);
});

// Import models
require('./models/Example');

const app = require('./app');

app.set('port', process.env.PORT || 80);
const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${server.address().port}`);
});
