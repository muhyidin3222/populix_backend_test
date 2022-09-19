'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'user@gmail.com',
          password:
            '$2b$10$F/Kwnq6JmFxCIzr2Wqq3ReTjkyInKxhh7pFb0q6TghayvyykUnCeO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    return queryInterface.bulkInsert(
      'product',
      [
        {
          title: 'Jual baju',
          image:
            'https://cdn.dev.bisaekspor.com/test/1648524269_evoA-cy7g.jpeg',
          id_user: 1,
          price: 300000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jual Pakean',
          image:
            'https://cdn.dev.bisaekspor.com/bisa-ekspor/assets/1659337401_bDiyXhz4R.jpeg',
          id_user: 1,
          price: 400000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jual Beli',
          image:
            'https://cdn.dev.bisaekspor.com/bisa-ekspor/assets/1659337401_bDiyXhz4R.jpeg',
          id_user: 1,
          price: 500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
  },
};
