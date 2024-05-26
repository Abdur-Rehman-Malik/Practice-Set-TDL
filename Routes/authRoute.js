const route = require("express").Router();
const authController = require("../Controller/authController");

route.get("/login", authController.login);

module.exports = route;
