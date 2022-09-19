'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};