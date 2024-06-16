const User = require("../database/models/User.model");
const FormatterService = require("../services/Formatter.service");
const PasswordService = require("../services/Password.service");

class UserController {
  async register(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Register a new user'
    // #swagger.description = 'Endpoint to register a new user in the system'
    /* #swagger.parameters["body"] = {
        in: "body",
        description: "
        <u>
          <li><b>userName</b>: Full name of the user. <mark>Required field</mark></li>
          <li><b>gender</b>: Gender of the user.</li>
          <li><b>email</b>: Email address of the user. <mark>Required field</mark></li>
          <li><b>cpf</b>: Brazilian CPF number of the user. <mark>Required field</mark></li>
          <li><b>phoneNumber</b>: Phone number of the user.</li>
          <li><b>password</b>: User password. <mark>Required field</mark></li>
        </u>",
        type: "object",
        schema: { $ref: "#/definitions/userRegisterBody" },
        required: true
      } */
    /* #swagger.responses[201] = {
        description: 'Successful user registration',
        schema: { $ref: "#/definitions/userRegister201" }
      } */
    /* #swagger.responses[400] = {
        description: 'Invalid input parameters',
        schema: { $ref: "#/definitions/userRegister400" }
      } */
    /* #swagger.responses[409] = {
        description: 'User already exists',
        schema: { $ref: "#/definitions/userRegister409" }
      } */
    /* #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: "#/definitions/userRegister500" }
      } */
    try {
      const { userName, gender, email, cpf, phoneNumber, password } = req.body;

      const formattedCPF = FormatterService.formatCPF(cpf);
      const formattedPhone = FormatterService.formatPhone(phoneNumber);
      const encryptedPassword = await PasswordService.encrypt(password);

      await User.create({
        userName,
        gender,
        email,
        cpf: formattedCPF,
        phoneNumber: formattedPhone,
        password: encryptedPassword,
      });

      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      if (
        error.name == "SequelizeUniqueConstraintError" ||
        error.name == "SequelizeDatabaseError"
      ) {
        return res.status(400).json({ message: error.message });
      }

      console.error("Error registering user:", error);
      return res.status(500).json({ message: "Unable to register." });
    }
  }

  async updateUserData(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Update user data'
    // #swagger.description = 'Endpoint to update user data'
    /* #swagger.parameters["body"] = {
        in: "body",
        description: "
        <u>
          <li><b>userName</b>: Full name of the user.</li>
          <li><b>gender</b>: Gender of the user.</li>
          <li><b>email</b>: Email address of the user.</li>
          <li><b>cpf</b>: Brazilian CPF number of the user.</li>
          <li><b>phoneNumber</b>: Phone number of the user.</li>
        </u>",
        type: "object",
        schema: { $ref: "#/definitions/userUpdateBody" }
      } */
    /* #swagger.responses[200] = {
        description: 'User data updated successfully',
        schema: { $ref: "#/definitions/userUpdate200" }
      } */
    /* #swagger.responses[400] = {
        description: 'User not found',
        schema: { $ref: "#/definitions/userUpdate400" }
      } */
    /* #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: "#/definitions/userUpdate500" }
      } */
    try {
      const { userName, gender, email, cpf, phoneNumber } = req.body;

      const formattedCPF = FormatterService.formatCPF(cpf);
      const formattedPhone = FormatterService.formatPhone(phoneNumber);
      const userId = req.payload.sub;

      await User.update(
        {
          userName: userName,
          gender: gender,
          email: email,
          cpf: formattedCPF,
          phoneNumber: formattedPhone,
        },
        { where: { id: userId } }
      );

      return res.status(200).json({ message: "User data updated Sucessfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "There was a problem with your request" });
    }
  }

  async deleteUser(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Delete user'
    // #swagger.description = 'Endpoint to delete a user'
    /* #swagger.responses[204] = {
        description: 'User deleted successfully',
        schema: { $ref: "#/definitions/userDelete200" }
      } */
    /* #swagger.responses[500] = {
        description: 'Unable to process',
        schema: { $ref: "#/definitions/userDelete500" }
      } */
    try {
      const userId = req.payload.sub;

      await User.destroy({ where: { id: userId } });
      return res.status(204).json({ message: "User deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Unable to process." });
    }
  }

  async listOneUser(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Get user details'
    // #swagger.description = 'Endpoint to get details of a single user'
    /* #swagger.responses[200] = {
        description: 'User details retrieved successfully',
        schema: { $ref: "#/definitions/userShow200" }
      } */
    /* #swagger.responses[400] = {
        description: 'Invalid input parameters',
        schema: { $ref: "#/definitions/userShow400" }
      } */
    /* #swagger.responses[404] = {
        description: 'User not found',
        schema: { $ref: "#/definitions/userShow404" }
      } */
    /* #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: "#/definitions/userShow500" }
      } */
    try {
      const userId = req.payload.sub;

      const user = await User.findByPk(userId);
      console.log(user);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(500).json({ message: "Unable to process request." });
    }
  }
}

module.exports = new UserController();
