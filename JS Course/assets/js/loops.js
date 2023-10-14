// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number #", i);
}
// find the odd number
console.log("Find Odd Number");
for (let i = 1; i <= 25; i++) {
  if (i % 2 != 0) {
    console.log("Odd Number #", i);
  }
}
// find the even number
console.log("Find Even Number");
for (let i = 1; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log("Even Number #", i);
  }
}

// While Loop
console.log("Find Divisiable 3 numbers");
let j = 1;

while (j <= 50) {
  if (j % 3 == 0) {
    console.log("Divisiable by 3 : ", j);
  }

  j++;
}

// Do While Loop
let k = 1;

do {
  if (k % 5 == 0) {
    console.log("Do While Divisible by 5 in Number : ", k);
  }
  k++;
} while (k <= 50);

// For-in Loop
console.log("For-in Loop");
const person = {
  name: "Arunkumar",
  age: 24,
};

for (let key in person) {
  console.log(key + ":", person[key]);
}

let colors=["red", "blue", 'green'];

for (let key in colors){
    console.log(colors[key]);
}

// For-of Loop
console.log("For-of Loop");
let color = ["red", "blue", "green"];

for (let colors of color) {
  console.log("Color: " + colors);
}
