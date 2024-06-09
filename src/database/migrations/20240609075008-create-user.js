"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING(64),
        validate: {
          len: [8, 64],
        },
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("male", "female", "other"),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        },
        unique: true,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING(14),
        validate: {
          len: [14, 14],
          is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        },
        unique: true,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [14, 14],
          is: /^\(\d{2}\) \d \d{4}-\d{4}$/,
        },
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
