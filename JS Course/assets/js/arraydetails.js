// Adding element to JS Array
const cart = ["Fruits", 1, true, undefined, null];

// Dynamically add element in Array
const serialNo=[1,2,3,4];
serialNo[4] = 5
console.log(serialNo);

// 3 method dynamically adding an element
console.log("Adding element to JS Array");
const foodItems = ["Biriyani", "Sambar","Fish Gravy"];
// push - Add last element
foodItems.push("Dosa");
console.log(foodItems);
// unshift - index at very 1 position
foodItems.unshift("Idly");
console.log(foodItems);
// Splice - present any position at any element
foodItems.splice(3, 0, "Mutton Gravy");
console.log(foodItems);

// Finding element in an JS Array
console.log("Finding element in an JS Array");
const fruitBuget = ["Apple", "Grapes", "Orange", "Gauva", "Mango"];
console.log("Finding element in an JS Array - PRIMITIVE TYPE");
// indexOf - Find the index no
console.log(fruitBuget.indexOf("Orange"));
console.log(fruitBuget.indexOf("grapes"));

// Find the element present or not in the given array using indexOf method
console.log(fruitBuget.indexOf("Gauva") != -1);

// includes - Find the element in given array
console.log(fruitBuget.includes("Mango"));
console.log(fruitBuget.includes("orange"));

console.log("Finding element in an JS Array - REFERENCE TYPE");
const cartItem = [
    {id:1, itemName:"Redmi", price:10000},
    {id:2, itemName:"Samsung", price:16000},
    {id:3, itemName:"iPhone",  price: 26000},
    {id:4, itemName:"Oneplus", price:13000},
]

// find()
// Call Back Function Creation
let findItem = cartItem.find(function(cartItem){
    return cartItem.itemName === "iPhone";
})
console.log(findItem);
// findIndex()
let findIndexNo = cartItem.findIndex(function (cartItem) {
  return cartItem.itemName === "iPhone";
});
console.log(findIndexNo);

// Arrow Function
// let findIndexNo = cartItem.findIndex((cartItem) => {
//   return cartItem.itemName === "iPhone";
// });
// console.log(findIndexNo);

// Removing element in the array
console.log("Removing element in the array");
const number = [1,2,3,4]

// Pop (End)
console.log(number);
console.log(number.pop());
console.log(number);

// shift (Start)
console.log(number);
console.log(number.shift());
console.log(number);

// Splice
const vowels = ['a', 'e', 'i', 'o', 'u']

console.log(vowels);
console.log(vowels.splice(2, 2));
console.log(vowels);


// Emptying an JS Array
console.log("Emptying an JS Array");
let numbers = [1,2,3,4,5] // Memory 1 allocated

// Way-1 (based on Dependable Variable) (RECOMMENDED)
let another_numbers = numbers; // Depandable variable created not delete on memory 1 in garbage collector.
numbers=[] // Menmory 2 allocated
console.log(numbers);

// Way-2 (based on Length) (RECOMMENDED)
let numbers_set2 = [6, 5, 3, 4, 2];
numbers_set2.length = 0; // Assign length = 0
console.log(numbers_set2);

// Way-3 (using spice method)
let numbers_set3=[7,6,8,9,4];
numbers_set3.splice(0,numbers_set3.length)
console.log(numbers_set3);

// Way-4 (using pop method) (NOT RECOMMENDED)
let numbers_set4 = [7, 6, 8, 9, 4];
while (numbers_set4.length){
  numbers_set4.pop();
}
console.log(numbers_set4);