/* let students = ["john", "jane", "jim", "jill", "jack", "jim"];

//indexOf>>returns the index of the first occurrence of the element in the array
console.log(students.indexOf("jim"));
//output: 2

console.log(students.lastIndexOf("jim"));
//output: 5
//lastIndexOf>>returns the index of the last occurrence of the element in the array if array having multiple occurrences of the element

//includes>>returns true if the element is present in the array otherwise returns false
console.log(students.includes("jim")); //output: true
console.log(students.includes("jerry")); //output: false

//find>>returns the first element that satisfies the condition
console.log(students.find((student) => student === "jim")); //output: jim */

let numbers = [10, 25, 30, 45];
console.log(numbers.find((number) => number > 20)); //output: 25,30,45

//findIndex>>returns the index of the first element that satisfies the condition
console.log(numbers.findIndex((number) => number > 20)); //output: 1

console.log(numbers.findLast((x) => x > 20)); //output: 45
//findLast>>returns the last element that satisfies the condition

console.log(numbers.findLastIndex((x) => x > 20)); //output: 3
//findLastIndex>>returns the index of the last element that satisfies the condition
