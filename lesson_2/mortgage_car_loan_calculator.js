/*
JS101 - Lesson 2: Small programs - Assignment: Mortgage/Car Loan Calculator

*/

const readline = require('readline-sync');
const MESSAGES = require('./mcl_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function messages(message) {
  return MESSAGES[message];
}

while (true) {
  prompt(messages('welcome'));

  prompt(messages('loanAmount'));
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(messages('invalidNumberLoanAmount'));
    loanAmount = readline.question();
  }

  prompt(messages('loanDuration'));
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt(messages('invalidNumberLoanDuration'));
    loanDuration = readline.question();
  }

  prompt(messages('aprResponse'));
  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt(messages('invalidNumberApr'));
    apr = readline.question();
  }

  const annualInterestRate = Number(apr) / 100;
  const monthlyInterestRate = Number(annualInterestRate) / 12;
  const loanMonths = Number(loanDuration) * 12;

  const monthlyPaymentRate = (Number(loanAmount) * monthlyInterestRate) / (1
    - (1 + monthlyInterestRate) ** -loanMonths);
  prompt(`Your monthly payment is: $${monthlyPaymentRate.toFixed(2)}`);

  prompt(messages('reCalculate'));
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
