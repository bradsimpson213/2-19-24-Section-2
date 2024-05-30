'use strict';
const {
  Model, Op
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
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
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "createdAt", "updatedAt", "email"]
      }
    },
    scopes: {
      userForPost: {
        attributes: {
          exclude: ['breed', 'favToy', 'age']
        }
      },
      findUser(credential) {
        return {
          where: {
            [Op.or]: {
              username: credential,
              email: credential
            }
          },
          attributes: {
            exclude: [ 'createdAt', 'updatedAt', 'breed', 'age', 'favToy', 'profile']
          }
        }
      }
    }
  });
  return User;
};