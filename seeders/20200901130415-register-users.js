"use strict";
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: "kurnia sandi pratama",
        email: "sandiptmmmmmmma@gmail.com",
        password: await bcrypt.hash('sandi123', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "kurnia sandi asu",
        email: "katasandexxxxsign@gmail.com",
        password: await bcrypt.hash('sandi123', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
