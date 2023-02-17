const {sequelizeCon} = require('./db');
const { Sequelize } = require('sequelize');

// TODO - define the Musician model
let User = sequelizeCon.define("user", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = {
    User
};