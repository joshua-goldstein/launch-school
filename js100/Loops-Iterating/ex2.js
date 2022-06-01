function factorial(n){
  let res = 1;
  for (let i = 1; i <= n; i += 1) {
    res *= i;
  }
  return res;
}

function getInput(prompt){
  let rlsync = require('readline-sync');
  let input = rlsync.question(prompt);
  return Number(input)
}

num = getInput("Enter a number: ");
console.log(factorial(num));
