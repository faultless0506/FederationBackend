'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Competitions', [
      {
        title: 'Чемпионат России 2023',
        content: ['{"Главное соревнование года", "Участвуют сильнейшие спортсмены страны"}'],
        date: new Date('2023-10-15'),
        location: 'Москва, СК "Олимпийский"',
        imageUrls: ['{"images/competitions/championship2023_1.jpg", "images/competitions/championship2023_2.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Кубок федерации',
        content: ['{"Традиционный турнир", "Открытый для всех возрастных категорий"}'],
        date: new Date('2023-08-20'),
        location: 'Санкт-Петербург, СК "Юбилейный"',
        imageUrls: ['{"images/competitions/federation_cup.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Первенство среди юниоров',
        content: ['{"Соревнования для спортсменов до 18 лет", "Отбор в юниорскую сборную страны"}'],
        date: new Date('2023-09-05'),
        location: 'Казань, Центр гимнастики',
        imageUrls: ['{"images/competitions/junior_championship.jpg"}'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Competitions', null, {});
  }
};