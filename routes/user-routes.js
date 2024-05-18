const express = require("express");
const routers = express.Router();

const UsersController = require("../controllers/users-controller");

routers.post("/", UsersController.saveUser);
routers.get("/", UsersController.getAllUsersController);
routers.get("/:pid", UsersController.getUsersById);

module.exports = routers;
