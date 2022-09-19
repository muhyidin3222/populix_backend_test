'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.STRING
        },
        validation_otp: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        }
      });
      transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};