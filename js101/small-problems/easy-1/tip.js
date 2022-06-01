function getInput(prompt) {
  let rlsync = require('readline-sync');
  input = rlsync.question(prompt);
  return (parseFloat(input));
}

let bill = getInput('What is the bill? ');
let tipPercent = getInput('What is the tip percentage? ') / 100;
let tip = bill * tipPercent;
let total = bill * (1 + tipPercent);

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);
