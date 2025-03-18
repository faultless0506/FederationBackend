'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('News', [
      {
        title: 'Федерация объявляет о новом турнире',
        content: 'Мы рады сообщить о проведении нового турнира, который состоится в следующем месяце. Подробности будут опубликованы позже.',
        imageUrls: ['{"images/news/tournament1.jpg", "images/news/tournament2.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Результаты чемпионата России',
        content: 'Подведены итоги чемпионата России по нашему виду спорта. Поздравляем победителей и призеров!',
        imageUrls: ['{"images/news/championship1.jpg", "images/news/championship2.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Изменения в правилах соревнований',
        content: 'Международная федерация внесла изменения в правила проведения соревнований. Ознакомьтесь с новыми правилами на нашем сайте.',
        imageUrls: ['{"images/news/rules.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('News', null, {});
  }
};