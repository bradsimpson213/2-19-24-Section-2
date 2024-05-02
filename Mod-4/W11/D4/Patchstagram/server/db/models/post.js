'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      Post.belongsTo(
        models.User,
        { foreignKey: "author"}
      )
      Post.belongsToMany(
        models.User, {
          foreignKey: "postId",
          through: models.Like,
          otherKey: "userId",
          as: "PostLikes"
        }
      )
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image: DataTypes.STRING(255),
    author: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};