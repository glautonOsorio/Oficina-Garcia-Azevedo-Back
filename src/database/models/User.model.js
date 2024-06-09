const { Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        userName: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            args: true,
            msg: "E-mail already exists",
          },
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            args: true,
            msg: "CPF already exists",
          },
        },
        phoneNumber: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "user",
        tableName: "Users",
      }
    );
  }
}
module.exports = User;
