'use strict';

require('dotenv').config();
var path = require('path');

// Global
global.ENV = process.env.NODE_ENV || `development`;
global.Sequelize = require(`sequelize`);
global._db = require(`${__dirname}/core/db`).getConnection();
global._controller = require(`${__dirname}/apps/controllers`);
global._lib = require(`${__dirname}/apps/libs`);
global._model = require(`${__dirname}/database/models`);
global.moment = require(`moment`);
global._LOG_FOLDER = `${__dirname}/logs`;
global.appRoot = path.resolve(__dirname);

//Requires
const express = require('express');
const response = require('./core/response.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require(`${__dirname}/apps/routes`)();
const cors = require('cors')

//Init app
const app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.use(response);
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(
  bodyParser.json({
    strict: false,
    limit: '50mb',
  }),
);
app.use(morgan('dev'));
app.use(router);
app.get('/', (req, res) => {
  res.send('success');
});
app.listen(process.env.PORT || 3001, '0.0.0.0', function () {
  console.log('SERVER BERJALAN DI PORT ' + process.env.PORT);
});
module.exports = app;