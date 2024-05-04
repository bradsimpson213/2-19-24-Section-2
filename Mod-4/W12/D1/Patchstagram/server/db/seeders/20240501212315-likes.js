'use strict';
const { Like } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Like.bulkCreate(
      [
        {
          userId: 2,
          postId: 1
        },
        {
          userId: 3,
          postId: 1
        },
        {
          userId: 3,
          postId: 2
        },
        {
          userId: 1,
          postId: 3
        },
        {
          userId: 3,
          postId: 3
        },
        {
          userId: 2,
          postId: 4
        },
        {
          userId: 1,
          postId: 5
        },
        {
          userId: 3,
          postId: 5
        },
        {
          userId: 2,
          postId: 5
        },
      ]
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
