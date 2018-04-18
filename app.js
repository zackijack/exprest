const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const authHandlers = require('./handlers/authHandler');
const errorHandlers = require('./handlers/errorHandler');

// Create the Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic authentication
app.use(authHandlers.validation);

// Routes handler
app.use('/v1', routes);

// If routes didn't work, throw 404 error and forward to error handler
app.use(errorHandlers.notFound);

// Development error handler
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

// Production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
