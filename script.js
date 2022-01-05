const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 12,
      close: 23,
    },
    saturday: {
      open: 0, //open 24*7
      close: 24,
    },
  },
  stafReport({ fName, age, job }) {
    console.log(`Hi I'm ${fName}, I'm ${age} old working as ${job}`);
  },
};

restaurant.stafReport({
  fName: 'Yasir',
  age: 23,
  job: 'chef',
});

//To destructure objects we use curly braces
//Use exact names of props in variables that are to be destructured.

//const { rName, categories, openHours } = restaurant;
//console.log(rName, categories, openHours);

// Destructuring with different props name
//let { rName: restName, categories, openHours } = restaurant;
//console.log(restName, categories, openHours);

//Default Value for menu Object
//const { rName: restName, categories, openHours, menu = {} } = restaurant;
//console.log(restName, categories, openHours, menu);

//Default Value for menu as Array
//const { rName: restName, categories, openHours, menu = [] } = restaurant;
//console.log(restName, categories, openHours, menu);

//Mutating variable while Destructuring objects
// let a = 100;
// let b = 200;

// const object = { a: 23, b: 111, c: 100, d: 300 };
// ({ a, b } = object); // mutating object
// console.log(object);

//opening hours for friday
// const {
//   openHours: {
//     friday: { open, close },
//   },
// } = restaurant;
// console.log(`on Friday we are open fron ${open} to ${close}`);
