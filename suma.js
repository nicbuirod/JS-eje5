function myFunction(obj) {
  const arr = Object.values(obj);
  const sum = arr.reduce((a, b) => a + b, 0);

  return sum;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
