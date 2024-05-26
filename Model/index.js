const sequelize = require("../bin/dbConnections");

const users = require("./definitions/users");

const models = { users };

const db = {};
db.sequelize = sequelize;
sequelize.model = models;

module.exports = { db, models };
