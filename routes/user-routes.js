const express = require("express");
const routers = express.Router();

const UsersController = require("../controllers/user-controllers");

routers.get("/", UsersController.getAllUsers);
routers.get("/:pid", UsersController.getUsersById);
routers.post("/", UsersController.saveUser);
routers.post("/login", UsersController.loginUser);

module.exports = routers;
