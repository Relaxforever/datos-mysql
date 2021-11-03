const fs = require('fs');
const config = require("../config/config.json");
const Sequelize = require("sequelize");

const environ = config[process.env.NODE_ENV || 4000];
console.log(environ.database);
console.log(environ.username);
console.log(environ.password);
const sequelize = new Sequelize(
    environ.database,
    environ.username,
    environ.password,
    {
        host: environ.host,
        dialect: environ.dialect,
        operatorAliases: false,
        dialectOptions: environ.dialectOptions
    });

module.exports = sequelize;
global.sequelize = sequelize;