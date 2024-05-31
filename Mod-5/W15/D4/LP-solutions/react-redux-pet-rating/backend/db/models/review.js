'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Pet, { foreignKey: 'petId' });
    }
  }
  Review.init({
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        isInt: true
      }
    },
    petId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};