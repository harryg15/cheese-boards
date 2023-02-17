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

    test('Multiple Boards can be added to a Cheese & Vice Versa', async () => {
        
        await Cheese.bulkCreate(seedCheeses) // creates Blue Cheese, Brie, Cheddar, Emmental
        const foundHardBoard = await Board.findByPk(1)
        await foundHardBoard.addCheeses(3)
        await foundHardBoard.addCheeses(4) // The Hard Board now has Cheddar & Emmental
        const getHardBoard = await foundHardBoard.getCheeses()

        const foundEmmental = await Cheese.findByPk(4)
        await foundEmmental.addBoards(1)
        await foundEmmental.addBoards(2) // The Emmental Cheese is now on Hard & Soft Boards
        const getEmmental = await foundEmmental.getBoards()

        // Checking Hard Board has Cheddar & Emmental Cheeses Associated
        expect(getHardBoard[0].dataValues.title).toEqual("Cheddar")
        expect(getHardBoard[1].dataValues.title).toEqual("Emmental")

        // Checking Emmental has Hard & Soft Boards Associated
        expect(getEmmental[0].dataValues.type).toEqual("Hard")
        expect(getEmmental[1].dataValues.type).toEqual("Soft")
    });

    test('A board can be loaded with its cheeses', async () => {

        const getAllBoards = await Board.findAll({
            include: [
                { model: Cheese }
            ]
        })

        // Hard Board is associated with both Cheddar & Emmental Cheese
        expect(getAllBoards[0].dataValues.cheeses.length).toEqual(2)

        // Soft Board is associated with only Emmental Cheese
        expect(getAllBoards[1].dataValues.cheeses.length).toEqual(1)
        
    });

    test('A user can be loaded with its boards', async () => {

        const getAllUsers = await User.findAll({
            include: [
                { model: Board }
            ]
        })

        // getAllUsers[1] points to User: Lewis (which we associated the data in above tests)
        expect(getAllUsers[1].dataValues.boards.length).toEqual(2)
        
    });

    test('A cheese can be loaded with its board data', async () => {

        const getAllCheeses = await Cheese.findAll({
            include: [
                { model: Board }
            ]
        })

        // Cheddar Cheese is associated with Hard Board (.length === 1)
        expect(getAllCheeses[2].dataValues.boards.length).toEqual(1)

        // Emmental Cheese is associated with both Hard Board & Soft Board (.length === 2)
        expect(getAllCheeses[3].dataValues.boards.length).toEqual(2)
        
    });
})