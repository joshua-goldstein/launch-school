let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce(foo, []);
}

function foo(acc, elm) {
  if (isOdd(elm.length)) {
    acc.push(elm.length);
  }
  return acc
}


function isOdd(n) {
  if (n % 2 === 0) return false;
  else return true;
}
