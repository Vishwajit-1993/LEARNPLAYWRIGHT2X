let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9], []];

// map → loop each ROW, return new array (same number of rows)
// reduce → inside each row, add all numbers → one total per row
// Step: [1,2,3] → 1+2+3=6 | [4,5,6] → 15 | [7,8,9] → 24
// Output: [6, 15, 24] — one sum for each row
let rowscores = a.map((row) => row.reduce((sum, value) => sum + value, 0));
console.log(rowscores); // [6, 15, 24]

let suiteResults = [
  ["login-pass", "register-pass", "logout-pass"], //Auth Suite
  ["search-pass", "filter-fail", "sort-pass"], //Search Suite
  ["checkout-fail", "payment-pass", "order-pass"], //payment suite
];

console.log("-----------------Fail Cases-----------------");
for (let row of suiteResults) {
  for (let cell of row) {
    if (cell.includes("fail")) {
      console.log(cell);
    }
  }
}

console.log("-----------------Pass Cases-----------------");
for (let i = 0; i < suiteResults.length; i++) {
  for (j = 0; j < suiteResults[i].length; j++) {
    if (suiteResults[i][j].includes("pass")) {
      console.log(suiteResults[i][j]);
    }
  }
}
