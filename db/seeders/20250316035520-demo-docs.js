"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Documents",
      [
        {
          id: 1,
          title: "Устав Федерации",
          fileUrl: "/public/docs/Устав_ФСМН.pdf",
          category: "Уставные",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          id: 2,
          title: "Сведения о персональном составе руководящих органов Федерации",
          fileUrl: "/public/docs/Приложение 3 Сведения о составе руководящих органов.docx",
          category: "Уставные",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Заявление на вступление в сборную(дети)",
          fileUrl: "/public/docs/Сборная Заявление дети.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Заявление на вступление в сборную(взрослые)",
          fileUrl: "/public/docs/Сборная Заявление взрослые.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Согласие на обработку данных(дети)",
          fileUrl: "/public/docs/Сборная Согласие дети.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Согласие на обработку данных(взрослые)",
          fileUrl: "/public/docs/Сборная Согласие взрослые.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Кодекс чести спортсмена(дети)",
          fileUrl: "/public/docs/Кодекс чести дети.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Кодекс чести спортсмена(взрослые)",
          fileUrl: "/public/docs/Кодекс чести взрослые.pdf",
          category: "Вступление в сборную",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Анкета спортсмена ФА1-3",
          fileUrl: "/public/docs/Фед. Анкета спортсмена ФА1-3.pdf",
          category: "Вступление в федерацию",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Согласие на обработку данных",
          fileUrl:
            "/public/docs/Фед. Согласие на обработку персональных данных.docx",
          category: "Вступление в федерацию",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "Положение о попечительском совете",
          fileUrl: "/public/docs/Положение о попечительском совете.pdf",
          category: "Положения",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "Положение о ТС РОО ФСМН в г. Москве",
          fileUrl: "/public/docs/Положение о ТС РОО ФСМН в г. Москве.pdf",
          category: "Положения",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          title: "Положение об отборе в сборную Москвы 2024",
          fileUrl:
            "/public/docs/Положение об отборе в сборную команду Москвы 2024 с изменениями.pdf",
          category: "Положения",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          title: "Дисциплинарный регламент",
          fileUrl:
            "/public/docs/Дисциплинарный регламент Москва 2024.pdf",
          category: "Положения",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Documents", null, {});
  },
};
