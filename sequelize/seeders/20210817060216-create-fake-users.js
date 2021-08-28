"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doeing",
          email: "john@gmail.com",
          uuid: "95f14f52-a723-4eed-abea-c3cc4464fbfc",
          role: "admin",
          createdAt: "2021-08-17T05:20:54.518Z",
          updatedAt: "2021-08-17T05:54:33.969Z",
        },
        {
          name: "jane Doe",
          email: "jane@gmail.com",
          uuid: "95f14f52-a723-4eed-abea-c3cc4214fbfc",
          role: "admin",
          createdAt: "2021-08-17T05:20:54.518Z",
          updatedAt: "2021-08-17T05:54:33.969Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  },
};
