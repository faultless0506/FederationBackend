"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const competitions = [
      {
        id: 1,
        title: "First competition Title",
        content: [
          "First competitions content part 1",
          "First competitions content part 2",
        ],
        startDate: "25/03/2025",
        location: "Location 1",
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Second competition Title",
        content: [
          "Second competitions content part 1",
          "Second competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Third competition Title",
        content: [
          "Third competitions content part 1",
          "Third competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "First competition Title",
        content: [
          "First competitions content part 1",
          "First competitions content part 2",
        ],
        startDate: "25/03/2025",
        location: "Location 1",
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "Second competition Title",
        content: [
          "Second competitions content part 1",
          "Second competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Third competition Title",
        content: [
          "Third competitions content part 1",
          "Third competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: "First competition Title",
        content: [
          "First competitions content part 1",
          "First competitions content part 2",
        ],
        startDate: "25/03/2025",
        location: "Location 1",
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: "Second competition Title",
        content: [
          "Second competitions content part 1",
          "Second competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: "Third competition Title",
        content: [
          "Third competitions content part 1",
          "Third competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2025",
        location: "Location 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: "Third competition Title",
        content: [
          "Third competitions content part 1",
          "Third competitions content part 2",
        ],
        images: ["/public/images/29D5fZxnA78.jpg", "/public/images/434.jpg"],
        startDate: "25/03/2023",
        location: "Location 3",
        resultsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        title: "Third competition Title",
        content: [
          "Third competitions content part 1",
          "Third competitions content part 2",
        ],
        images: [
          "/public/images/29D5fZxnA78.jpg",
          "/public/images/434.jpg",
          "/public/images/268677.jpg",
          "/public/images/c_qlSu-EaBA.jpg",
        ],
        startDate: "25/03/2024",
        location: "Location 3",
        resultsId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Competitions", competitions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Competitions", null, {});
  },
};
