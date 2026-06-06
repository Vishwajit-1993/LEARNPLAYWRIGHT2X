/* //concat
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

let c = a.concat(b); //concat() is used to merge two arrays and return a new array
console.log(c);

//SPREAD CONCATINATION
//... is used to spread the elements of the array and return a new array
let d = [...a, ...b];
console.log(d);
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//SPREAD CONCATINATION WITH OBJECTS
let e = { ...a, ...b };
console.log(e);
// { '0': 6, '1': 7, '2': 8, '3': 9, '4': 10 }

//SPREAD CONCATINATION WITH FUNCTIONS
let f = (...args) => {
  console.log(args);
};
f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Join >> is used to join the elements of the array with a separator and return a string
let g = a.join("-");
console.log(g);
// output: 1-2-3-4-5 */

/* //isArray() >> is used to check if the given value is an array and returns a boolean value
let h = Array.isArray("a");
console.log(h);
// output: false
let i = [1, 2, 3, 4, 5];
let j = Array.isArray(i);
console.log(j);
// output: true
 */

//every() >> is used to check if all the elements of the array satisfy the condition and returns a boolean value
let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every((number) => number > 0);
console.log(allPositive);
// output: true
let allNegative = numbers.every((number) => number < 0);
console.log(allNegative);
// output: false
let result = [200, 201, 203];
let allPositive2 = result.every((scode) => scode >= 200);
console.log(allPositive2);
// output: true

//some() >> is used to check if at least one element of the array satisfies the condition and returns a boolean value
let numbers2 = [1, 2, 3, 4, 5];
let somePositive = numbers2.some((number) => number > 0);
console.log(somePositive);
// output: true
let someNegative = numbers2.some((number) => number < 0);
console.log(someNegative);
// output: false
let result2 = [200, 201, 203];
let somePositive2 = result2.some((scode) => scode >= 200);
console.log(somePositive2);
// output: true
