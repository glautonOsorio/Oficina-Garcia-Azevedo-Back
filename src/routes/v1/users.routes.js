const { Router } = require("express");
const userController = require("../../controllers/user.controller");
const { auth } = require("../../middlewares/auth");
const userRoutes = new Router();

userRoutes.post("/register", userController.register);
userRoutes.put("/profile", auth, userController.updateUserData);
userRoutes.delete("/profile", auth, userController.deleteUser);
userRoutes.get("/profile", auth, userController.listOneUser);

module.exports = userRoutes;
