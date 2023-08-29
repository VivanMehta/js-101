/*
JS101-JS119 - Small problems / Easy 1 - 6

write a program that asks user to enter integer greater than 0
then ask whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer

*/ 
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter integer greater than 0: ");
let number = parseInt(readlineSync.prompt(), 10);
console.log('Enter "s" to compute the sum, or "p" to compute the product. ')
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`)
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(`The product of integers between 1 and ${number} is ${product}.`);
} else {
  console.log("Oops. Unknown operation.");
}