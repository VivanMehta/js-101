// Ask for the first number
// Ask for the second number
// Ask for the operation
// Perform the operation
// Display result
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json'); // Add this line to import the JSON file
const LANGUAGE = 'en';

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}


function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('welcome');
let name = readline.question();

while (true) {
  prompt('num1');
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    num1 = readline.question();
  }

  prompt('num2');
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    num2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4.');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  console.log(`The result is ${output}.`); // Use string literals
  console.log('Would you like to perform another operation? (y/n)'); // Use string literals

  let answer = readline.question();

  if (answer !== 'y') {
    console.log('Goodbye!');
    break;
  }
}