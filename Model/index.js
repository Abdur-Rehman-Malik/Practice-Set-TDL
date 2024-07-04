const sequelize = require("../bin/dbConnections");

const users = require("./definitions/users");
const tasks = require("./definitions/tasks");

const models = { users, tasks };

users.hasMany(tasks, { foreignKey: "userId" });
tasks.belongsTo(users, { foreignKey: "userId" });

const db = {};
db.sequelize = sequelize;
sequelize.model = models;

module.exports = { db, models };
