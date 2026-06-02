// ============================================================
// Leap Year Rules
// ============================================================
// 1. Divisible by 4        → usually a leap year
// 2. Divisible by 100      → NOT a leap year (century exception)
// 3. Divisible by 400      → IS a leap year (overrides rule 2)
//
// Examples:
//   2024 → leap   (÷4 yes, ÷100 no)
//   2023 → not    (÷4 no)
//   1900 → not    (÷100 yes, ÷400 no)
//   2000 → leap   (÷400 yes)
//   2100 → not    (÷100 yes, ÷400 no)  ← year below
//
// Use % (remainder), not / (division): year % 4 === 0 means divisible by 4
// ============================================================

let year = 2100;

// (÷4 AND not ÷100) OR ÷400
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}