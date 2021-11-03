const dotenv =require("dotenv");

dotenv.config();

module.exports = {
  "development": {
    "username": "lotto-manager",
    "password": process.env.DB_PASSWORD,
    "database": "lotto_project",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "lotto-manager",
    "password": process.env.DB_PASSWORD,
    "database": "lotto_project",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "lotto-manager",
    "password": process.env.DB_PASSWORD,
    "database": "lotto_project", 
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
