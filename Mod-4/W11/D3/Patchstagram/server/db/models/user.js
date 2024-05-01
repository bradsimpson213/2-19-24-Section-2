'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    profile: DataTypes.STRING(255),
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: "Cats need a 'pawsitive' age"
        },
        max: 38,
      },
    },
    breed: DataTypes.STRING(50),
    favToy: {
      type: DataTypes.STRING(50),
      defaultValue: "mouse"
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};