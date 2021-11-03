const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: "lotto-manager",
    password: process.env.DB_PASSWORD,
    database: "lotto_project",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "lotto-manager",
    password: process.env.DB_PASSWORD,
    database: "lotto_project",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.HEROKU_DB_USERNAME,
    password: process.env.HEROKU_DB_PASSWORD,
    database: process.env.HEROKU_DB_DATABASE,
    host: process.env.HEROKU_DB_HOST,
    dialect: "mysql",
  },
};
