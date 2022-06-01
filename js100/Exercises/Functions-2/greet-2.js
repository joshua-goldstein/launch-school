function greet(arg1 = "Hello", arg2 = "world") {
  console.log(`${arg1}, ${arg2}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
