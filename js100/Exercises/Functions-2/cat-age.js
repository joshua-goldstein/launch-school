function catAge(age) {
  if (age <= 1) {
    return age*15;
  } else if (age <= 2) {
    return 15 + (age-1)*9;
  } else {
    return 24 + (age-2)*4;
  }
}

function say(input) {
  console.log(input);
}

say(catAge(0)); // 0
say(catAge(1)); // 15
say(catAge(2)); // 24
say(catAge(3)); // 28
say(catAge(4)); // 32
