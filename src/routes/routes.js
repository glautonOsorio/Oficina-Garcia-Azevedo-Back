const { Router } = require("express")
const loginRoutes = require("./login.routes")

const userRoutes = require("./users.routes")

const routes = new Router()

routes.use('/login', loginRoutes)
routes.use('/users', userRoutes)

module.exports = routes