let rlsync = require('readline-sync');
let n = rlsync.question(
  'Please enter an integer greater than 0: '
  );
let choice = rlsync.question(
  'Enter "s" to compute sum, or "p" to compute product: '
  );

if (choice === "s") {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  console.log(
    `Sum of all integers between 0 and ${n} is ${sum}.`
  );
}

if (choice === "p") {
  let prod = 1;
  for (let i = 1; i <= n; i += 1) {
    prod *= i;
  }
  console.log(
    `Product of all itnegers between 1 and ${n} is ${prod}.`
  );
}
