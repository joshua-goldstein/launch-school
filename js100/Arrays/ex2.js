let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

//method 1
myArray.forEach(function (num) {
  if (num % 2 === 0) {
     console.log(num);
   }
})

//method 2

function isEven(n) {
  if (n % 2 === 0){
    console.log(n);
  }
}

myArray.forEach(isEven)

//method 3

newArray = myArray.filter(num => num % 2 === 0);
newArray.forEach(num => console.log(num));

//method 4

for (let i = 0; i < myArray.length; i += 1) {
  let val = myArray[i]
  if (val % 2 === 0) {
    console.log(val);
  }
}
