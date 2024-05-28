const route = require("express").Router();
const {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
} = require("../Controller/taskController");

route.post("/createTask", createTask);
route.get("/allTasks", getAllTasks);
route.get("/deleteTask", deleteTask);
route.put("/updateTask", updateTask);

module.exports = route;
