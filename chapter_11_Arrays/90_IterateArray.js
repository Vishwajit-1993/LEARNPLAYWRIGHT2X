let tests = ["test1", "test2", "test3", "test4", "test5"];

for (let i = 0; i < tests.length; i++) {
  console.log(tests[i]);
}

console.log("--------------------------------");

for (i of tests) {
  console.log(i);
}

console.log("--------------------------------");

tests.forEach((i, index) => {
  console.log(`index of Test ${index}: ${i}`); //i is the value of the array and index is the index of the array
  
});

console.log("--------------------------------");

for (let i in tests) {
  console.log(tests[i]);
}
//i is the index of the array
console.log("--------------------------------");

for (i of tests) {
  console.log(i);
}
//i is the value of the array
console.log("-----------for of loop---------------------");

const names = ["John", "Jane", "Jim", "Jill", "Jack"];

names.splice(2, 1, "Somy");
console.log(names);
