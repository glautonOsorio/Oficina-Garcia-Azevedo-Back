const { Router } = require("express")
const loginController = require("../controllers/login.controller")

const loginRoutes = new Router()

loginRoutes.post('/', loginController.login)

module.exports = loginRoutes