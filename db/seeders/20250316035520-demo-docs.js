'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Documents', [
      {
        title: 'Устав федерации',
        fileUrl: 'documents/federation_charter.pdf',
        category: 'Нормативные документы',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Правила соревнований 2023',
        fileUrl: 'documents/competition_rules_2023.pdf',
        category: 'Правила',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Календарный план на 2023 год',
        fileUrl: 'documents/calendar_2023.pdf',
        category: 'Календарь',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Положение о сборной команде',
        fileUrl: 'documents/team_regulations.pdf',
        category: 'Нормативные документы',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Documents', null, {});
  }
};