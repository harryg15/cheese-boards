const {sequelizeCon} = require('./db');
const { Sequelize } = require('sequelize');

let Board = sequelizeCon.define("board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.INTEGER
});

module.exports = {
    Board
};