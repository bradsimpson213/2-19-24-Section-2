'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(
        models.Post,
        { foreignKey: "author"}
      )

      User.belongsToMany(
        models.Post, {
          foreignKey: "userId",
          through: models.Like,
          otherKey: "postId"
        }
      )
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