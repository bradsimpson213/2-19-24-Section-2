'use strict';
const { Pet, Review } = require('../models');

const pets = [
  {
    name: 'Dog',
    Reviews: [
      {
        rating: 5
      },
      {
        rating: 3
      }
    ]
  },
  {
    name: 'Cat',
    Reviews: [
      {
        rating: 3
      }
    ]
  },
  {
    name: 'Elephant',
    Reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    name: 'Peacock',
    Reviews: [
      {
        rating: 1,
      },
      {
        rating: 4
      }
    ]
  },
  {
    name: 'Squirrel',
    Reviews: [
      {
        rating: 4
      }
    ]
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let petInfo of pets) {
      await Pet.create(petInfo, {
        include: [{
          model: Review,
        }]
      })
      // await pet.createReviews(petInfo.reviews);
    }
  },

  async down (queryInterface, Sequelize) {
    await Pet.destroy({
      where: {
        name: pets.map(pet => pet.name)
      }
    });
  }
};
