const express = require('express');
const router = express.Router();

const pets = require('./pets');
const reviews = require('./reviews');

router.use('/pets', pets);
router.use('/reviews', reviews);

module.exports = router;