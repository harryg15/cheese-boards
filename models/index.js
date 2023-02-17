const {User} = require('./User')
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')

Board.belongsTo(User)
User.hasMany(Board)

Board.belongsToMany(Cheese, {through: "board_cheeses"})
Cheese.belongsToMany(Board, {through: "board_cheeses"})

module.exports = { User, Board, Cheese }