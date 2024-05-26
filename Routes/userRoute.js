const route = require("express").Router();

const userController = require("../Controller/userController");
const { update } = require("../Model/definitions/users");
route.post("/createUser", userController.createUser);
route.get("/getAllusers", userController.getAllusers);
route.delete("/deleteUser", userController.deleteUser);
route.put("/updateUser", userController.updateUser);
module.exports = route;
