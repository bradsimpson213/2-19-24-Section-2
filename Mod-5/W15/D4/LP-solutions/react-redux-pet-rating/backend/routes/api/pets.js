const express = require('express');
const router = express.Router();

const { Pet, Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const pets = await Pet.findAll({
    include: [
      {
        model: Review
      }
    ]
  });
  res.json(pets);
});

router.post('/:petId/reviews', async (req, res) => {
  const { petId } = req.params;
  const { rating } = req.body;
  const review = await Review.create({
    rating,
    petId: parseInt(petId)
  });
  return res.json(review);
});

module.exports = router;