'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define news data with images
    const news = [
      {
        id: 1,
        title: 'First News Title',
        content: ['First news content part 1', 'First news content part 2'],
        images: ['/public/images/29D5fZxnA78.jpg', '/public/images/434.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Second News Title',
        content: ['Second news content part 1', 'Second news content part 2'],
        images: ['/public/images/268677.jpg', '/public/images/c_qlSu-EaBA.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        id: 3,
        title: 'First News Title',
        content: ['First news content part 1', 'First news content part 2'],
        images: ['/public/images/29D5fZxnA78.jpg', '/public/images/434.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'Second News Title',
        content: ['Second news content part 1', 'Second news content part 2'],
        images: ['/public/images/268677.jpg', '/public/images/c_qlSu-EaBA.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        id: 5,
        title: 'First News Title',
        content: ['First news content part 1', 'First news content part 2'],
        images: ['/public/images/29D5fZxnA78.jpg', '/public/images/434.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: 'Second News Title',
        content: ['Second news content part 1', 'Second news content part 2'],
        images: ['/public/images/268677.jpg', '/public/images/c_qlSu-EaBA.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        id: 7,
        title: 'First News Title',
        content: ['First news content part 1', 'First news content part 2'],
        images: ['/public/images/29D5fZxnA78.jpg', '/public/images/434.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: 'Second News Title',
        content: ['Second news content part 1', 'Second news content part 2'],
        images: ['/public/images/268677.jpg', '/public/images/c_qlSu-EaBA.jpg'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('News', news, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('News', null, {});
  },
};
