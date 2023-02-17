const {sequelizeCon} = require('./db');
const { Sequelize } = require('sequelize');

let Cheese = sequelizeCon.define("cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = {
    Cheese
};