let rlsync = require('readline-sync');

let first = rlsync.question("What is your first name? ");
let last = rlsync.question("What is your last name? ");

console.log(`Hello, ${first} ${last}!`);
