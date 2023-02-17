const seedUsers = [
    {
      name: 'Harry',
      email: 'harry@email.com',
    },
    {
      name: 'Lewis',
      email: 'lewis@email.com',
    }
  ]
  
  const seedBoards = [
    {
      type: 'Hard',
      description: "Hard Cheeses Board",
      rating: 3.5
    },
    {
      type: 'Soft',
      description: "Soft Cheeses Board",
      rating: 4.5
    }
  ]
  
  const seedCheeses = [
    {
      title: 'Blue Cheese',
      description: `Blue cheese has a distinct smell and, 
      what some consider, an acquired taste. Blue cheeses 
      can be eaten crumbed or melted.`
    },
    {
      title: 'Brie',
      description: `Brie is a soft, white cheese. It comes in a 
      wheel, sometimes in a small wooden box, and is considered a 
      great dessert cheese. Experts recommend enjoying it at 
      room temperature.`
    },
    {
      title: 'Cheddar',
      description: `This popular cheese comes in many variations. 
      Its flavor can range from creamy to sharp, and its color can 
      run between a natural white to pumpkin orange. A Cheddar’s 
      texture changes as it ages, becoming drier and more crumbly.`
    },
    {
      title: 'Emmental',
      description: `When people think of “Swiss cheese,” they’re 
      likely thinking of Emmental (also known as Emmentaler). 
      When the cheese’s curds are cooked and pressed together, 
      bubbles form, which leave the holes in the cheese. 
      It’s sweet, tangy and melts well.`
    }
  ]
  
  module.exports = {
    seedUsers,
    seedBoards,
    seedCheeses
  };