const User = require("../database/models/User.model");
const { sign } = require("jsonwebtoken");
const PasswordService = require("../services/Password.service");

class LoginController {
  async login(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Log in a user'
    // #swagger.description = 'Endpoint to log in a user into the system'
    /* 
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'User credentials for login',
        required: true,
        schema: { $ref: '#/definitions/userLoginBody' }
      }
    */
    /* 
      #swagger.responses[200] = {
        description: 'Successful login response',
        schema: { $ref: '#/definitions/userLogin200' }
      }
    */
    /* 
      #swagger.responses[400] = {
        description: 'Bad request, missing email or password',
        schema: { $ref: '#/definitions/userLogin400' }
      }
    */
    /* 
      #swagger.responses[404] = {
        description: 'User not found',
        schema: { $ref: '#/definitions/userLogin404' }
      }
    */
    /* 
      #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: '#/definitions/userLogin500' }
      }
    */
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(400).json({ message: "E-mail is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      const hashPassword = PasswordService.compare(password, user.password);

      if (!hashPassword)
        return res.status(404).json({ message: "Invalid user or password." });

      const payload = { sub: user.id, email: user.email };
      const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).json({ Token: token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unable to login." });
    }
  }
}

module.exports = new LoginController();
