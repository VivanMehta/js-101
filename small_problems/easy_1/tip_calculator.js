/*
JS101-JS119 - Small problems / Easy 1 - 5

create a simple tip calculator
prompt for a bill amount and a tip rate
the program must compute the tip and log both tip and total amount of bill

*/

let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill? "));
let tipPercentage = parseFloat(readlineSync.question("What is the tip percentage? "));

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);
