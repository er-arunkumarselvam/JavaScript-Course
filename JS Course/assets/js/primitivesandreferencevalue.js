// Primitive values vs Reference Values
// Primitive values
let num1 = 10;
let num2 = num1;

console.log("Value of num 1: ", num1);
console.log("Value of num 2: ", num2);

// Modify num1 value
num1 = 20;

console.log("After modify the value of num 1: ", num1);
console.log("After modify the Value of num 2: ", num2);
console.log("Both num1 and num2 are Independent Variables. This is known as Primitive Values.");

// Reference Values
let x = {
    value : 10
};

let y = x;

console.log("Value of x: ", x);
console.log("Value of y: ", y);

// Modify num1 value
x.value = 20;
console.log("After modify the value of x: ", x);
console.log("After modify the Value of y: ", y);
console.log(
  "Both x and y are Dependent Variables. This is known as Reference Values."
);

// Real Time Application
// Primitives Values
let cart = 5;


function updateCart1(cart){
    cart++;
}

updateCart1(cart);

console.log("Primitive Cart Avaiable: " + cart);

// Reference Values
let cartObj = {
  value: 5,
};

function updateCart2(cartObj) {
  cartObj.value++;
}

updateCart2(cartObj);

console.log("Reference Cart Avaiable: ", cartObj);