// 1. Conditional Statement Task
/* Mobile buying suggestions
   If given saving amount is greater than 15K Buy Android Mobile
   or If given saving amount is greater than 65K Buy IPhone Mobile
   or If given saving amount is greater than 8K and less than 15K Buy Basic Android Mobile
   else "you can't afford mobile phone now!"
*/
let savingsAmount = 4000;

// If else method
console.log("If Else");
if (savingsAmount >= 65000) {
  console.log("You can afford Iphone Mobile");
} else if (savingsAmount >= 15000) {
  console.log("You can afford Android Mobile");
} else if (savingsAmount >= 5000 && savingsAmount <= 15000) {
  console.log("You can afford Basic Android Mobile");
} else {
  console.log("You can't afford mobile phone now!");
}

// Switch Case
console.log("Switch Case");
switch (true) {
  case savingsAmount >= 65000:
    console.log("You can afford Iphone Mobile");
    break;
  case savingsAmount >= 15000:
    console.log("You can afford Android Mobile");
    break;

  case savingsAmount >= 8000 && savingsAmount <= 15000:
    console.log("Your can afford Basic Android Mobile");
    break;
  default:
    console.log("You can't afford mobile phone now!");
}
