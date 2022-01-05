const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring all elements of categories Array
console.log('----DESTRUCTURING----');
const [a, b, c, d] = restaurant.categories;
console.log(a, b, c, d);

//Destructuring the 1st, 3rd, and 4rth element
// to do that we will simply leave the hole between commas
console.log('----SKIP ELEMENT----');
const [x, , y, z] = restaurant.categories;
console.log(x, y, z);

//Destructuring 1st and 2nd element with reverse order
//solution#1 old way
console.log('----ORDER CHANGE Sol-1----');
let [first, second, third, fourth] = restaurant.categories;
console.log(first, second);
/* const temp = first;
first = second;
second = temp;
console.log(first, second); */
//solution#2 new way
console.log('----ORDER CHANGE Sol-2----');
[first, second, third, fourth] = [second, third, fourth, first];
console.log(first, second, third, fourth);

//Destructuring on Function returning Array.
const [food1, food2] = restaurant.orderFood(2, 0);
console.log(food1, food2);

//Destructuring from nested Arrays, which means destructuring inside destructuring
const nestedArray = [1, 2, [3, 4], 5, 6];
const [nest1, , [nest2]] = nestedArray;
console.log(nest1, nest2);

//Destructuring -setting default values
const defValue = [1, 2, [3, 4]];
const [defV1, , [defV2], defV3 = 1] = defValue;
console.log(defV1, defV2, defV3);
