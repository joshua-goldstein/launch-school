function removeLastChar(str) {
  arr = str.split("");
  arr.pop();
  return arr.join("")
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
