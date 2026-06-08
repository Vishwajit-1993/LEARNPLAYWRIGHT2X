//Rest Parameter is used to pass a variable number of arguments to a function
//it is denoted by ...args
//it is used to pass a variable number of arguments to a function
//it is also called as spread operator

function logResult(suiteName, ...results) {
  console.log(suiteName);
  console.log(results);
}
logResult("Login Test", "Pass", "Fail", "Skip");
//output: Login Test
//output: [ 'Pass', 'Fail', 'Skip' ]

logResult("Registration Test", "Pass", "Fail", "Skip");
//output: Registration Test
//output: [ 'Pass', 'Fail', 'Skip' ]

logResult("Logout Test", "Pass", "Fail", "Skip");
//output: Logout Test
//output: [ 'Pass', 'Fail', 'Skip' ]

// --- Sum using rest parameter ---
// ...numbers collects ALL extra arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
console.log(sumAll(5)); // 5
console.log(sumAll()); // 0 (no arguments → empty array → reduce starts at 0)

// Rest with a fixed first parameter
function sumFromBase(base, ...numbers) {
  return base + numbers.reduce((total, n) => total + n, 0);
}
console.log(sumFromBase(100, 10, 20, 30)); // 160
