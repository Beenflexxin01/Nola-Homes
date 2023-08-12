const fs = require('fs');

const rent = JSON.parse(fs.readFileSync('./dev-data/data/rent.json'));

exports.getAllRent = function (req, res, next) {
  res.status(200).json({
    status: 'Success',
    result: rent.length,
    data: { rent },
  });
  next();
};

exports.createRent = function (req, res, next) {
  res.status(200).json({
    status: 'Success',
    result: rent.length,
    data: { rent },
  });
};

exports.getRent = function (req, res, next) {
  res.status(200).json({
    status: 'Success',
    result: rent.length,
    data: { rent },
  });
  next();
};

exports.updateRent = function (req, res, next) {
  res.status(200).json({
    status: 'Success',
    result: rent.length,
    data: { rent },
  });
  next();
};

exports.deleteRent = function (req, res, next) {
  res.status(201).json({
    status: 'Success',
  });
  next();
};
