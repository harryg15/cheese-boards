const {sequelizeCon} = require('./db')
const {User, Board, Cheese} = require('./models/index')
const {
    seedUsers,
    seedBoards,
    seedCheeses
  } = require('./seedData');

describe('User, Board & Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelizeCon.sync({ force: true });
    });

    test('Multiple Boards can be added to a User', async () => {
        // TODO - write test

        await User.bulkCreate(seedUsers) // creates Harry & Lewis Users
        await Board.bulkCreate(seedBoards) // creates Hard & Soft Boards
        const foundLewis = await User.findByPk(2)
        await foundLewis.addBoards(1)
        await foundLewis.addBoards(2) 
        // Lewis should now have Hard & Soft Boards associated with him
        const getBoards = await foundLewis.getBoards()

        expect(getBoards[0].dataValues.type).toEqual("Hard")
        expect(getBoards[1].dataValues.type).toEqual("Soft")
    });
})