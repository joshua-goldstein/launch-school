function findIntegers(array) {
  return array.filter(isInteger)
}

function isInteger(n) {
  if (Number.isInteger(n)) return true
  else return false
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

