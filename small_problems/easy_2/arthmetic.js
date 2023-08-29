// Program should prompt user for 2 positive integers
// print the results of the following operations on those 2 numbers:
// addition, subtraction, product, quotient, remainder, and powers

function prompt(message) {
  return "==> " + message;
}

let readlineSync = require("readline-sync");

let num1 = parseFloat(readlineSync.question(prompt("Enter the first number:\n")));
let num2 = parseFloat(readlineSync.question(prompt("Enter the second number:\n")));

console.log(prompt(`${num1} + ${num2} = ${num1 + num2}`));
console.log(prompt(`${num1} - ${num2} = ${num1 - num2}`));
console.log(prompt(`${num1} * ${num2} = ${num1 * num2}`));
console.log(prompt(`${num1} / ${num2} = ${num1 / num2}`));
console.log(prompt(`${num1} % ${num2} = ${num1 % num2}`));
console.log(prompt(`${num1} ** ${num2} = ${num1 ** num2}`));