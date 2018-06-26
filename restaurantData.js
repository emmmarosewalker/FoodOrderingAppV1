export const stars = {
  one : require('./assets/OneStar.png'),
  two: require('./assets/TwoStars.png'),
  three: require('./assets/ThreeStars.png'),
  four: require('./assets/FourStars.png'),
  five: require('./assets/FiveStars.png')
}

export const icons = {
  pizza: require('./assets/PizzaIcon.png'),
  sandwich: require('./assets/SandwichIcon.png'),
  noodles: require('./assets/NoodlesIcon.png'),
  sushi: require('./assets/SushiIcon.png')
}

export const restaurants = [
{
  key: '1', 
  category: 'Italian', 
  name: `Bill's Pizzas`, 
  stars: stars.three,
  icon: icons.pizza
},
{
  key: '2', 
  category: 'Sandwiches', 
  name: `Subway`, 
  stars: stars.two,
  icon: icons.sandwich
},
{
  key: '3', 
  category: 'Sandwiches', 
  name: `Nora's Sandwiches`, 
  stars: stars.five,
  icon: icons.sandwich
},
{
  key: '4', 
  category: 'Italian',
  name: `Campus Hub Pizzas`,
  stars: stars.four,
  icon: icons.pizza
},
{
  key: '5', 
  category: 'Thai',
  name: `Thairiffic`,
  stars: stars.two,
  icon: icons.noodles
},
{
  key: '6', 
  category: 'Japanese', 
  name: `Hero Sushi`, 
  stars: stars.three,
  icon: icons.sushi
},
{
  key: '7',
  category: 'Chinese',
  name: `Balls BBQ`,
  stars: stars.one,
  icon: icons.noodles
},
{
  key: '8',
  category: 'Sausages',
  name: `Huegman Chow's`,
  stars: stars.five,
  icon: icons.sushi
}
];



export const menus = { 
  "Huegman" : [
  {
    key: 'hotdog',
    dishName: 'Hot Dog of the Day',
    dishPrice: '9.90',
    quantity: 2,
    desc: "The Huegman special, updated daily! Comes on a hot dog bun with tomato sauce, mustard and onions."
  },
  {
    key: 'mysterymeat',
    dishName: 'Mystery Meat Sausage',
    dishPrice: '1.10',
    quantity: 3,
    desc: "Is it pork? Is it beef? Is it something else entirely? We leave it up to you to guess. Comes with a side of chicken nuggets."
  },
  {
    key: 'chipolata',
    dishName: 'Chipolata Soup',
    dishPrice: '7.80',
    quantity: 0,
    desc: "Huegman's winter special: Pea soup with chipolatas carefully floated, smothered in gravy. A customer favourite."
  },
  {
    key: 'meatloaf',
    dishName: 'Bavarian Meatloaf',
    dishPrice: '17.60',
    quantity: 0,
    desc: "Huegman's ancestral dish. Comes with a side of boiled cabbage."
  },
  {
    key: 'bangerz',
    dishName: "Bangerz 'n' Mash",
    dishPrice: '13.80',
    quantity: 7,
    desc: "A twist on the original. Comes with 2 fish sausages served on a bed of bok choy with a side of mashed spaghetti."
  },
  {
    key: 'water',
    dishName: "Mount Franklin Water",
    dishPrice: '3.80',
    quantity: 1,
    desc: "600mL chilled bottled water."
  },
   {
    key: 'tea',
    dishName: "Traditional Tea",
    dishPrice: '3.80',
    quantity: 0,
    desc: "Luke warm water with traditional Chinese herbal tea. Made fresh by Mrs Huegman Chow"
  }
  ]
};

export const orders = {
  "orderid1" : [
  {
    key: 'one',
    dishName: menus.Huegman[0]['dishName'],
    dishPrice: menus.Huegman[0]['dishPrice'],
    quantity: menus.Huegman[0]['quantity']
  },
  {
    key: 'two',
    dishName: menus.Huegman[1]['dishName'],
    dishPrice: menus.Huegman[1]['dishPrice'],
    quantity: menus.Huegman[1]['quantity']
  },
  {
    key: 'three',
    dishName: menus.Huegman[4]['dishName'],
    dishPrice: menus.Huegman[4]['dishPrice'],
    quantity: menus.Huegman[4]['quantity']
  },
  {
    key: 'four',
    dishName: menus.Huegman[5]['dishName'],
    dishPrice: menus.Huegman[5]['dishPrice'],
    quantity: menus.Huegman[5]['quantity']
  }
  ]
};







