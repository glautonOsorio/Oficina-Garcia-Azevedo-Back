"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const characters = [
      {
        userName: "Kyo Kusanagi",
        gender: "male",
        email: "kyo@example.com",
        cpf: "12345678901",
        phoneNumber: "(11) 98765-4321",
        password: await bcrypt.hash("password123", 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Iori Yagami",
        gender: "male",
        email: "iori@example.com",
        cpf: "23456789012",
        phoneNumber: "(22) 12345-6789",
        password: await bcrypt.hash("password123", 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Terry Bogard",
        gender: "male",
        email: "terry@example.com",
        cpf: "34567890123",
        phoneNumber: "(33) 23456-7890",
        password: await bcrypt.hash("password123", 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Athena Asamiya",
        gender: "female",
        email: "athena@example.com",
        cpf: "45678901234",
        phoneNumber: "(44) 34567-8901",
        password: await bcrypt.hash("password123", 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: "Kula Diamond",
        gender: "female",
        email: "kula@example.com",
        cpf: "56789012345",
        phoneNumber: "(55) 45678-9012",
        password: await bcrypt.hash("password123", 10), // Hash the password
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
