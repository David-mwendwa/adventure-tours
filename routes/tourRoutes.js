const express = require('express');

const {
  checkBody,
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require('./../controllers/tourController');

const router = express.Router();

router
  .route('/')
  .get(getTours)
  .post(checkBody, createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;