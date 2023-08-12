const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const monogSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const rentRouter = require('./Routes/rentRoute');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname), 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet.crossOriginEmbedderPolicy({ policy: 'credentialless' }));

app.use(cors());

app.options('*', cors());

app.use(
  hpp({
    whitelist: ['duration'],
  }),
);

app.use(cookieParser());

app.use(monogSanitize());

app.use(xss());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Too many requests from this IP. Kindly wait and try again in 1 hour 😑',
});

app.use('/api', limiter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/rents', rentRouter);

app.use(compression);

module.exports = app;
