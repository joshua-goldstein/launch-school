function getInput(prompt) {
  let rlsync = require('readline-sync');
  let input = rlsync.question(prompt);
  return parseFloat(input);
}

let length = getInput("Enter length of room in meters: ");
let width = getInput("Enter width of room in meters: ");

let area_m2 = length * width;
let area_ft2 = area_m2 * 10.7639;

console.log(
  `The area of the room is ${area_m2} square meters (${area_ft2} 
square feet).`
);
