function getInput(prompt){
  let rlsync = require('readline-sync');
  let input = rlsync.question(prompt);
  return input
}

function printAge(age, timeElapsed){
  console.log(`In ${timeElapsed} years, you will be ${age+timeElapsed} years old.`);
}

let age = Number(getInput("How old are you? "));
console.log(`You are ${age} years old.`);

for (let i = 1; i < 5; i += 1) {
  printAge(age, i*10);
}
