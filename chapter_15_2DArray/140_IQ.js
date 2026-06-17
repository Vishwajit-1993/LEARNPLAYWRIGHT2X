//Use in Automation Testing

let testMatrix = [
  ["login", "Pass", 200],
  ["logout", "Fail", 404],
  ["Search", "Pass", 180],
];
//How many test case executed?
//How many test case passed?
//what status code you have got when test case is failed?

/* for (let i = 0; i < testMatrix.length; i++) {
  {
    for (let j = 0; j < testMatrix[i].length; j++) {
      console.log(testMatrix[i][j]);
      if (testMatrix[i][j] === "Fail") {
        console.log(testMatrix[i][2]);
      }
    }
  }
} */

/* for (let row of testMatrix) {
  for (let cell of row) {
    process.stdout.write(cell + " ");
  }
  console.log();
} */

// CAVEMAN EXPLAIN:
// Big box (testMatrix) has many rows
// For each row → take one row
//   For each cell in row → print cell + space (same line, no new line)
//   After row done → press Enter (console.log empty = new line)
// Result: each test case on one line → "login Pass 200"
testMatrix.forEach((row) => {
  row.forEach((cell) => {
    process.stdout.write(cell + " "); // write on SAME line (no Enter yet)
  });
  console.log(); // row finished → go to NEXT line
});