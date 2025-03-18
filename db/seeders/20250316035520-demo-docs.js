'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Documents', [
      {
        title: 'Устав федерации',
        fileUrl: '/public/docs/Устав_ФСМН.pdf',
        category: 'Нормативные документы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Documents', null, {});
  }
};