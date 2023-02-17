const {sequelizeCon} = require('../db');
const { Sequelize } = require('sequelize');

let User = sequelizeCon.define("user", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = {
    User
};