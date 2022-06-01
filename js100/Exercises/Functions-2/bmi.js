function calculateBMI(height, weight) {
  //  height in cm
  //  weight in kg
  let heightInMeters = height / 100;
  let weightInKilograms = weight;
  bmi = weightInKilograms / heightInMeters**2;
  return bmi;
}

console.log(typeof(bmi));

let x = calculateBMI(180, 80); // "24.69"
console.log(typeof(x));
console.log(Number(x).toFixed(2));
