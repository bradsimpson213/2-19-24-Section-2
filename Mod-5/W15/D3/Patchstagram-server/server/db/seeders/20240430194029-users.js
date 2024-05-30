'use strict';
const { User } = require("../models")
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await User.bulkCreate(
      [
        {
          name: "Patch",
          username: "Patchenator",
          email: "patch1@gmail.com",
          hashedPassword: bcrypt.hashSync("iluvfood", 12),
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912257/Patchstagram/IMG_3074_ubqe1e.jpg",
          age: 8,
          breed: "American Short Hair",
          favToy: "Plushy Avocado"
        }, 
        {
          name: "Blue",
          username: "Blueberry44",
          email: "ninja@aol.com",
          hashedPassword: bcrypt.hashSync("iseeyou", 12),
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg",
          age: 8,
          breed: "American Short Hair",
          favToy: "orange fish"
        },
        {
          name: "Mimi",
          username: "mimi24/7",
          email: "mimi_is_me@gmail.com",
          hashedPassword: bcrypt.hashSync("mimimimi", 12),
          profile: "https://res.cloudinary.com/app-academy4/image/upload/v1684861055/Patchstagram/Mimi2_nzcfiy.png",
          age: 12,
          breed: "American Long Hair",
        },
        {
          name: "Garfield",
          username: "Garfield_the_cat",
          email: "garfield@hotmail.com",
          hashedPassword: bcrypt.hashSync("ihatemondays", 12),
          profile: "https://variety.com/wp-content/uploads/2022/08/Garfield-image-8K.jpeg?w=1000",
          age: 23,
          breed: "Domestic Short Hair",
          favToy: "lasagna"
        },
      ],
      { validate: true }
    )
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', {
        name: ["Patch", "Blue", "Mimi"]
     });
     
  }
};
