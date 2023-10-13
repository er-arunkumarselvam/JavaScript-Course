// Conditional Statements (If and Else)
// Example 1
let climate = "hot";
console.log("If Else");
if (climate === "hot") {
  console.log("Climate is hot!");
} else {
  console.log("Climate is cold!");
}
// Example 2
let isRaining = true;
let isCloudy = false;

if (isRaining || isCloudy) {
  console.log("Don't forget to take Umberlla!");
} else {
  console.log("Sky is normal! Enjoy the weather!");
}

// Example 3

/*  If hour is between 12AM to 1PM -> Good Morning
    Else if hour is between 1PM to 5PM -> Good Afternoon
    Else hour is between 5PM to 12AM -> Good Evening
*/
let date = new Date();
// Date In built function
// console.log(date);
let hour = date.getHours();
// let hour = new Date().getHours();
console.log("If ElseIf");
if (hour >= 0 && hour <= 13) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Switch Case
console.log("Switch Case");
// Grade Feedback System

let grade = "B";

switch (grade) {
  case "S":
    console.log("Super Grade");
    break;
  case "A":
    console.log("Excellent Grade");
    break;
  // Multiple Case handle
  case "B":
  case "C":
    console.log("Good Grade");
    break;
  case "E":
    console.log("Just Pass!");
    break;
  case "U":
    console.log("Failed");
    break;
  default:
    console.log("Unknow Grade");
}

// Mark Based Grade System
let marks =70;

switch (true) {
  case (marks >= 90):
    console.log("Super Grade");
    break;
  case (marks >= 80):
    console.log("A+ Grade");
    break;
  case (marks >= 70):
    console.log("A Grade");
    break;
  case (marks >= 60):
    console.log("B+ Grade");
    break;
  case (marks >= 50):
    console.log("B Grade");
    break;
  case marks <= 50:
    console.log("U Grade");
    break;
  default:
    console.log("Unknown Grade");
}



