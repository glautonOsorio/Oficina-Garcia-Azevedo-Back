"use strict";

const PasswordService = require("../../services/Password.service");

module.exports = {
  async up(queryInterface, Sequelize) {
    const characters = [
      {
        userName: "Kyo Kusanagi",
        gender: "male",
        email: "kyo@example.com",
        cpf: "123.456.789-01",
        phoneNumber: "(11) 98765-4321",
        password: PasswordService.encrypt("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Iori Yagami",
        gender: "male",
        email: "iori@example.com",
        cpf: "234.567.890-12",
        phoneNumber: "(22) 12345-6789",
        password: PasswordService.encrypt("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Terry Bogard",
        gender: "male",
        email: "terry@example.com",
        cpf: "345.678.901-23",
        phoneNumber: "(33) 23456-7890",
        password: PasswordService.encrypt("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Athena Asamiya",
        gender: "female",
        email: "athena@example.com",
        cpf: "456.789.012-34",
        phoneNumber: "(44) 34567-8901",
        password: PasswordService.encrypt("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Kula Diamond",
        gender: "female",
        email: "kula@example.com",
        cpf: "567.890.123-45",
        phoneNumber: "(55) 45678-9012",
        password: PasswordService.encrypt("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert users into the database
    await queryInterface.bulkInsert("Users", characters, {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all users
    await queryInterface.bulkDelete("Users", null, {});
  },
};
