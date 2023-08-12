const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = require('./app');

process.on('uncaughtException', function (err) {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION 😫 Shutting down NOW...');

  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log('Mongodb connection successful 😀😛...');
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('App is running on port 3000.....');
});

process.on('uncaughtException', function (err) {
  console.log(err.name);
  console.log('UNHANDLED EXCEPTION! Shutting down 🚶‍♂️ ... ');
  server.close(function () {
    process.exit(1);
  });
});

// const port = 3000;

// app.listen(port, function () {
//   console.log(`App is running on port ${port}....`);
// });
