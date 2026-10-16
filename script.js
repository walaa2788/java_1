// 1. Variables and Data Types

var userName = "Walaa";   // String
let age = 22;             // Number
const isStudent = true;   // Boolean

console.log("Name:", userName);
console.log("Age:", age);
console.log("Is student:", isStudent);


// 2. Operators

let a = 20;
let b = 10;
let c = 5;
let d = 2;

// Arithmetic operators
console.log("Addition:", a + b + c + d);
console.log("Subtraction:", a - b - c - d);
console.log("Multiplication:", a * b * c * d);
console.log("Division:", a / b);

// Comparison operators
console.log("a equals b:", a == b);
console.log("a greater than b:", a > b);
console.log("a less than b:", a < b);


// 3. Conditions

// If statement
let score = 95;

if (score > 90) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Switch statement
// getDay(): Sunday = 0, Monday = 1, ..., Saturday = 6
let currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday: Have a nice day");
    break;

  case 1:
    console.log("Monday: Start of the week");
    break;

  case 2:
    console.log("Tuesday: Keep going");
    break;

  case 3:
    console.log("Wednesday: Middle of the week");
    break;

  case 4:
    console.log("Thursday: Almost the weekend");
    break;

  case 5:
    console.log("Friday: Enjoy your day");
    break;

  case 6:
    console.log("Saturday: Time to relax");
    break;

  default:
    console.log("Invalid day");
}


// 4. Loops

// For loop: from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("Even number: " + i);
  } else {
    console.log("Odd number: " + i);
  }
}

// While loop: from 10 down to 1
let number = 10;

while (number >= 1) {
  if (number > 5) {
    console.log("High: " + number);
  } else {
    console.log("Low: " + number);
  }

  number--;
}