const express = require('express');

const rentController = require('../controller/rentController');

const router = express.Router();

router
  .route('/')
  .get(rentController.getAllRent)
  .post(rentController.createRent);

router
  .route('/:id')
  .get(rentController.getRent)
  .patch(rentController.updateRent)
  .delete(rentController.deleteRent);

module.exports = router;
