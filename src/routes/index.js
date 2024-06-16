const { Router } = require("express");
const loginRoutes = require("./v1/login.routes");

const userRoutes = require("./v1/users.routes");

const routes = new Router();

routes.use("/login", loginRoutes);
routes.use("/users", userRoutes);

module.exports = routes;
