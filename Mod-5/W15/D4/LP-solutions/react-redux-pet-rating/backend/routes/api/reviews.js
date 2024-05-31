const express = require('express');
const router = express.Router();

const { Review } = require('../../db/models');

router.put('/:reviewId', async (req, res) => {
  const { reviewId } = req.params;
  const { rating } = req.body;
  const review = await Review.findByPk(reviewId);
  review.rating = parseInt(rating);
  await review.save();
  return res.json(review);
});

router.delete('/:reviewId', async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findByPk(reviewId);
  await review.destroy();
  return res.json(review);
});

module.exports = router;