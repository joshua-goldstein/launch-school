let rlsync = require('readline-sync');
input = rlsync.question("Enter a number: ");
numberRange(input);

function numberRange(num){
  switch (true) {
    case num >= 0 && num <= 50: 
      console.log('[0,50]');
      break
    case num >= 51 && num <= 100:
      console.log('[51, 100]');
      break
    case num < 0:
      console.log('(-infty, 0)');
      break
    case num > 100:
      console.log('[101, infty)');
      break
  }
}
