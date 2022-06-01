
function factorial(n){
  if (n === 1) {
    return 1;
  }

  return n*factorial(n-1)
}


function getInput(prompt){
  let rlsync = require('readline-sync');
  let input = rlsync.question(prompt);
  return Number(input)
}

num = getInput("Enter a number: ");
console.log(factorial(num));
