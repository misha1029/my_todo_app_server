'use strict';
const moment = require('moment');




 function generateTasks() {

  const tasks = [];
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 10; j++) {
      tasks.push({
                   userId: i +1,
                   value: `UserID #${i +1} task value #${j + 1}`,
                   isDone: Math.random() > 0.5,
                   deadline: moment().set('date', 7 + j).toDate(),
                   createdAt: new Date(),
                   updatedAt: new Date()
                 })
    }
  }
  return tasks;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tasks', generateTasks(), {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Tasks', null, {});

  }
};
