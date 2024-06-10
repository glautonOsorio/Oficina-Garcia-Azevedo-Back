const Sequelize = require("sequelize");
const configDB = require("./config/database");
const User = require("./models/User.model");

const models = {
  User,
};

const connection = new Sequelize(configDB);

Object.values(models).forEach((model) => {
  model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { connection };
