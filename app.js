const path = require('path');

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const monogSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname), 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet.crossOriginEmbedderPolicy({ policy: 'credentialless' }));

app.use(cors());

app.options('*', cors());

app.use(hpp());

app.use(cookieParser());

app.use(monogSanitize());

app.use(xss());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

module.exports = app;
