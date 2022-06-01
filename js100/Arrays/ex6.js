let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let arrLengths = arr.map(string => string.length);
let oddLengths = arrLengths.filter(isOdd);
console.log(oddLengths);


function isOdd(num) {
  if (num % 2 === 0) return false
  else return true
}
