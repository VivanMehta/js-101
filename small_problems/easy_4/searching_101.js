let readlineSync = require("readline-sync");

let firstNum = readlineSync.question("Emter the 1st number: ");
let secondNum = readlineSync.question("Enter the 2nd number: ");
let thirdNum = readlineSync.question("Enter the 3rd number: ");
let fourthNum = readlineSync.question("Enter the 4th number: ");
let fifthNum = readlineSync.question("Enter the 5th number: ");
let lastNum = readlineSync.question("Enter the last number: ")

if (lastNum === firstNum || lastNum === secondNum || lastNum === thirdNum || lastNum === fourthNum || lastNum === fifthNum) {
  console.log(`\nThe number ${lastNum} appears in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, ${fifthNum}.`)
} else {
  console.log(`\nThe number ${lastNum} does not appear in ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum}, ${fifthNum}.`)
}
