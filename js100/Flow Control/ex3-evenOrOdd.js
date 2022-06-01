function evenOrOdd(input){
  if (!Number.isInteger(input)) {
    console.log('input not integer');
    return;
  } else if (input % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }

}
