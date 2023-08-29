// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

let readlineSync = require("readline-sync");
const currentYear = new Date().getFullYear();

let age = readlineSync.question("What is your age? ")
let retire = readlineSync.question("At what age would you like to retire? ")
console.log('')

console.log(`It's ${currentYear}. You will retire in ${retire - age + currentYear}.`)
console.log(`You have only ${retire - age} years of work to go!`)