function copyObj(obj, keyArray = 0)  {
  if (keyArray === 0) {
    keyArray = Object.keys(obj);
  }
  let newObj = {};
  for (let key in obj) {
    if (!keyArray.includes(key)) continue;
    else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }


