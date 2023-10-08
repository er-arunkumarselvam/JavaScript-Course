// JS Operators
// Arithmatic Operators
let number1 = 5;
let number2 = 10;
// Logic or Expression
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2); //Power

// Increament & Decreament Operator
// Pre Increament Operator
console.log("Before, Pre Increament Operator " + number1); // 5
console.log("After, Pre Increament Operator " + ++number1); // 1+5 = 6
// Pre Decreament Operator
console.log("Before, Pre decreament Operator " + number1); // 6
console.log("After, Pre decreament Operator " + --number1); // 1-6 = 5
// Pre Increament Operator
console.log("Before, Post Increament Operator " + number1); // 5
console.log("After, Post Increament Operator " + number1++); // 5 + 1 = 6 (not  print) opertion to be performed.
console.log("Result, Post Increament Operator " + number1); // 6
// Pre Decreament Operator
console.log("Before, Post Decreament Operator " + number1); // 6
console.log("After, Post Decreament Operator " + number1--); // 6-1 = 5 (not  print) opertion to be performed.
console.log("Result, Post Decreament Operator " + number1); // 5

// Assignment Operators (= using assign the values)
let num1 = 10;

num1 += 2;
console.log(num1); // 10+2 = 12
num1 -= 2;
console.log(num1); // 12-2 = 10
num1 *= 2;
console.log(num1); // 10*2 = 20
num1 /= 2;
console.log(num1); // 20/2 = 10
num1 %= 2;
console.log(num1); // 10%2 = 0
num1 **= 2;
console.log(num1); // 0 ** 2 = 0
num1 = 10; // Assign the value of num1
num1 **= 2;
console.log(num1); // 10 **2 =100

// Comparison Operator
let x = 1;

// Relational Operator
//less than and lessthan or equal to
console.log(x < 5); // 1<5 --> true
console.log(x <= 5); // 1<=5 --> true

x = 5;
console.log(x < 5); // 5<5 --> false
console.log(x <= 5); // 5<=5 --> true

//greater than and greaterthan or equal to
x = 1;
console.log(x > 5); // 1>5 --> false
console.log(x >= 5); // 1>=5 -->false

x = 5;
console.log(x > 5); // 5>5 --> false
console.log(x >= 5); // 5>=5 -->true

// Equality Operator
x = 5;
console.log(x == 5); // 5 == 5 --> true (check only value)
console.log(x === 5); // 5 === 5 --> ture (check both datatype and value)
console.log(x === "5"); // string convert into number 5 === 5 --> true
console.log(1 === true); // true is converted into binary (1)  1 === 1 --> true
console.log(1 === false); // false is converted into binary (0)  1 === 0 ---> false
// Not Equality Operator
x = 5;
console.log(x != 5);
console.log(x !== 5);

// String Comperation
console.log("Arun" < "Anbu"); // dictionary mode. check individual character one by one ---> false

// Equality Operator
// Strict Equality Operator (Check both values and datatype)
console.log(1 === 1); // number === number ---> true
console.log("1" === 1); // string === number ---> false

// Lose Eauality Operator (Check Only values)
console.log(1 == 1); // number == number ---> true
console.log("1" == 1); // string == number (convert string) ---> true

// Ternary Operator

// Practical Approach
/* 1. If person's age is more than 18, they are "Eligible" category.
   2. Otherwise, They are a 'Not Eligible' category. */

let age = 24;

let applyVoterId = age > 18 ? "Eligible" : "Not Eligible";

console.log(applyVoterId); // Eligible

// Logical Operator
// logical AND (&&)
// Two logics are same. either true and true or false and false.
console.log(true && true); // True
console.log(false && true); // false
console.log(false && false); // false

// logical OR (||)
// Any one logic is True the total condition is true.
console.log(true || false); // True
console.log(false || true); // True
console.log(false || false); // false

// Logical NOT (!)
// Opposite act
console.log(!true); // false
console.log(!false); // true

// Banking Loan Approval Scenario
/* 1. Check High Income (true) and CIBIL Score (true) --> Loan Eligible otherwise not Eligible 
   2. High Income (true) and CIBIl Score (false) --> Pending Application */

let monthlyIncome = true;
let cibelScore = true;

// first condition
let person1 = monthlyIncome && cibelScore;
console.log("Loan Eligible Status is " + person1);

// second condition
cibelScore = false;
let person2 = monthlyIncome && cibelScore;
console.log("Loan Eligible Status is " + person2);

/* 1. Check High Income (true) or CIBIL Score (true) --> Loan Eligible. */
let person3 = monthlyIncome || cibelScore;
console.log("Loan Eligible Status is " + person3);

// Application Status !
let applicationStatus = !person3;
console.log("Application Status (Person3) is " + applicationStatus);

