let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name? ");
let length = name.length;

let NAME = name.charAt(length - 1)
if (NAME === "!") {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}