//  JS Objects
// Object Declare
// let person = {} // Empty Object
let person = {
  //  key  : value
  name: "Arunkumar",
  age: 24,
  gender: "Male",
  city: "Kumbakonam",
  // Sub Objects Creation
  sibling: {
    brother: "Prasanna",
  },
};

console.log(person);
// Access Object or Reference Value
// Dot Notation
console.log(person.name);
console.log("Before, Value change " + person.age);

// Object Value override
person.age = 26;
console.log("After, Value change " + person.age);

// Bracket Notation
console.log(person["gender"]);
console.log(person["city"]);

// Sub Object get values
console.log(person.sibling.brother);
