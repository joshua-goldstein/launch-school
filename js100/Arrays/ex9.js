let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

//check if 3 is in array

function check(arr) {
  let newArray = arr.filter(entry => entry === 3)
  if (newArray.length === 0) {
    return false
  } else {
    return true
  }
}

console.log(check(numbers1))
console.log(check(numbers2))
console.log(check(numbers3))
