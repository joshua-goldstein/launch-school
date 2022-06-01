
let rlsync = require('readline-sync');

function getInput(prompt){
  input = rlsync.question(prompt);
  return input;
}

function multiply(x, y){
  return x*y;
}

let num1 = getInput("Enter first number: ");
let num2 = getInput("Enter second number: ");
let res = multiply(num1, num2)
console.log(`${num1} * ${num2} = ${res}`);
