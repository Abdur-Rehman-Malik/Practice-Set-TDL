require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully Connected!");
  })
  .catch((error) => {
    console.log("Not Connected", error.message);
  });
module.exports = sequelize;
