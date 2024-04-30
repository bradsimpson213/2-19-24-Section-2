'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint(
      "Colors", {
        fields: ["name"],
        type: "unique",
        name: "colors_name_unique"
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "Colors", "colors_name_unique"
    )
  }
};
