'use strict';

const { Post } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Post.bulkCreate(
      [
        {
          title: "Napping Outside is always fun...",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912033/Patchstagram/IMG_3394_fktg48.jpg",
          author: 1,
        },
        {
          title: "Napping inside is pretty awesome too...",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912403/Patchstagram/64865942444__2B7B1A74-ECAF-4798-BEAB-D4890B7164C4_hnmowy.jpg",
          author: 2,
        },
        {
          title: "I like my fish",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912006/Patchstagram/IMG_3437_u2frrk.jpg",
          author: 2,
        },
        {
          title: "Now THIS is a party!",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912056/Patchstagram/IMG_3389_i6czzx.jpg",
          author: 3,
        },
        {
          title: "This punk stole my tent! ⛺️",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912094/Patchstagram/IMG_3211_sy5wcy.jpg",
          author: 2,
        },
        {
          title: "Look who I saw outside today...",
          image: "https://res.cloudinary.com/app-academy4/image/upload/v1684860951/Patchstagram/Mimi1_lxltmk.png",
          author: 1,
        },
      ],
      { validate: true }
    )
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete("Posts", null, {});
  }
};
