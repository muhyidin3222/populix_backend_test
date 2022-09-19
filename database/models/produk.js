'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      freezeTableName: true,
    },
  );
  return Product;
};
