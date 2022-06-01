rlsync = require('readline-sync');

let age = Number(rlsync.question("What is your age? "));

console.log(`You are ${age} years old.`);
console.log(`In 10 years you will be ${age+10} years old.`);
console.log(`In 20 years you will be ${age+20} years old.`);
