'use strict';
const { User } = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await User.bulkCreate(
      [
        {
          name: "Patch",
          username: "Patchenator",
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912257/Patchstagram/IMG_3074_ubqe1e.jpg",
          age: 8,
          breed: "American Short Hair",
          favToy: "Plushy Avocado"
        }, 
        {
          name: "Blue",
          username: "Blueberry44",
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg",
          age: 8,
          breed: "American Short Hair",
          favToy: "orange fish"
        },
        {
          name: "Mimi",
          username: "mimi24/7",
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1684861055/Patchstagram/Mimi2_nzcfiy.png",
          age: 12,
          breed: "American Long Hair",
        }
      ], { validate: true }
    )
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', {
        name: ["Patch", "Blue", "Mimi"]
     });
     
  }
};
