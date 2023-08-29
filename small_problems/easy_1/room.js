/* 
JS101-JS119 - Small problems / Easy 1 - 4

Build a program that asks user to enter length & width of a room in meters
then log the area of the room to console in square meters and square feet
1 square meter == 10.7639 square feet

*/

const SQM_TO_SQF = 10.7639;
let readlineSync = require("readline-sync");
let length = readlineSync.question("Enter the length of the room in meters: \n<= ");
let width = readlineSync.question("Enter the width of the room in meters: \n<= ");
console.log(`The area of the room is ${length * width} square meters (${length * width * SQM_TO_SQF}).`)