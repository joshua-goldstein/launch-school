let bar = 1;
function foo() {
//  let bar = 2;
	bar = 2
}

foo();
console.log(bar);

// logs 1 in console
// however, writing bar = 2 instead will log 2
