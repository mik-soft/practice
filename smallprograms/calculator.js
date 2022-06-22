
const readline = require('readline-sync');
// at the top of the file

const MESSAGES = require('./calc_messages.json');
const LANGUAGE = 'en';

function messages(message, lang) {
    return MESSAGES[lang][message];
  }

function prompt(key) {
    let message = messages(key, LANGUAGE);
    return readline.question(`${message} \n`);
  }

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

let name = prompt("welcome")
//console.log('Welcome to Calculator!');

let choice = ''
do{

let number1 = prompt("firstNumber")

while (invalidNumber(number1)) {
  //console.log("validNumber");
  number1 = prompt("tryFirstAgain")
}

;
let number2 = prompt("secondNumber");

while (invalidNumber(number2)) {
    //console.log("validNumber");
  number2 = prompt("trySecondAgain")
}

;
let operation = (prompt('operatorQuestion'));

while (!['1', '2', '3', '4'].includes(operation)) {
  
  operation = prompt("1234")
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is: ${output}`);

;
choice = prompt("anotherCalculation")
} while(choice === 'y')