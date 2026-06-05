//map>>returns a new array with the results of calling a function for every array element.
//Map will create a new array with same length as the original array but values will be returned based on the condition

let numbers = [10, 55, 30, 20, 89, 25];

let grades = numbers.map((number) => (number > 30 ? "Pass" : "Fail"));

console.log(grades);

//filter>>returns a new array with all elements that satisfy the condition
let firstPass = numbers.filter((number) => number > 30);
console.log(firstPass);

//reduce → returns ONE single value by combining all array elements
// (accumulator, currentValue) => ... runs once per element
// 0 at the end = starting value of accumulator
//
// Step-by-step for numbers = [10, 55, 30, 20, 89, 25]:
//   Start     → accumulator = 0
//   + 10      → accumulator = 10
//   + 55      → accumulator = 65
//   + 30      → accumulator = 95
//   + 20      → accumulator = 115
//   + 89      → accumulator = 204
//   + 25      → accumulator = 229  ← final sum
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // 229

//flat>>returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [
  [1, 2],
  [8, 9, 10],
  [3, 4],
  [5, 6],
];
let flatArray = nestedArray.flat();
console.log(flatArray);
