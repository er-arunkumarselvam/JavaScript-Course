// JavaScript Inbuild Objects
// Math Object
console.log("Math Inbuild Properties and Method:");
// PI Properties
console.log(Math.PI);
// abs Method
console.log(Math.abs(-3));
// ceil Method
console.log(Math.ceil(0.1));
console.log(Math.ceil(0.5));
console.log(Math.ceil(0.9));
// random Method
console.log(Math.random());
// random Method (1-100)
console.log(Math.random() * (100 - 1) + 1);
// round Method
console.log(Math.round(3.5));
console.log(Math.round(3.1));
console.log(Math.round(3.9));
// Max() Method
console.log (Math.max(54,75,80,92,56));
// Min() Method
console.log(Math.min(54, 75, 80, 92, 56));
// Find the Max and Min Marks
let marks = [55,78,65,47,82]
// Arrays get the values using spread operator
let maxMark = Math.max(...marks);
let minMark = Math.min(...marks);

console.log("Maximum mark is : ", maxMark);
console.log("Minimum mark is : ", minMark);
// String Inbuild Object
console.log("string Inbuild Properties and Method:");
// Primitive string values creation
let firstName = "Arun";
let middleName = 'Kumar';
let lastName = `Selvam`;// Template Literals
console.log(typeof firstName);
const firstName2 = new String("Arun");
console.log(typeof firstName2);
// length
console.log(firstName.length);
// charAt --> Index based
console.log(firstName.charAt(3));
// concatenate 
console.log(firstName.concat(" ", lastName));
// Includes
console.log(firstName.includes("ru"));
console.log(firstName.includes("Ar"));
console.log(firstName.includes("ar"));
// endWith
console.log(firstName.endsWith("un"));
// IndexOf
console.log(firstName.indexOf("n"));
// repeat
console.log(firstName.repeat(5));
// replace
console.log(firstName.replace("Arun", "ARUN"));
// Slice
console.log(firstName.slice(1));
// Split
let sentance = "Some text are present"

console.log(sentance.split(" ", 1));

console.log(sentance.split(" ", 2));

console.log(sentance.split(" ", 3));

console.log(sentance.split(" ", 4));
// substr
console.log(sentance.substr(5));
// toLowerCase
console.log(firstName.toLowerCase());
// toUpperCase
console.log(firstName.toUpperCase());
// trim
let message ="My name is Arunkumar Selvam. "; 
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

// Date Object
console.log("Date Object - Date()");

// Date() (Not Perferable)
const date = Date().toString();
console.log(date, typeof date);
// Creation of object with date (Right Way)
const dateNow = new Date();
console.log(dateNow, typeof dateNow);
// Set Year
dateNow.setFullYear("1998");
console.log(dateNow.getFullYear());

// Multiple Variable
let [month, dates, year] = new Date().toLocaleDateString("en-IN").split("-");

console.log(month);



