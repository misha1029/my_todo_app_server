'use strict';
const bcrypt = require('bcrypt');

function generateUsers() {
  const users = [];
  for (let i = 0; i < 100;) {
    users.push(new Object({
                            firstName: 'Test',
                            lastName: 'Testovich',
                            login: `Test_Login${++i}`,
                            email: `email${i}@gmail.com`,
                            passwordHash: bcrypt.hashSync(`password${i}`, bcrypt.genSaltSync(10)),
                            createdAt: new Date(),
                            updatedAt: new Date(),
                          }));
  }
  return users
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Users', null, {});
  }
};
