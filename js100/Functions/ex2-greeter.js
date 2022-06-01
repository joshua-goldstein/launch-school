let rlsync = require('readline-sync')

function getName(prompt){
  name = rlsync.question(prompt);
  return name
}

firstname = getName("What is your first name? ");
lastname = getName("What is your last name? ");

console.log(`Hello, ${firstname} ${lastname}!`);

