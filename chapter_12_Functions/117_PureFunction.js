// ============================================================
// Pure Function
// ============================================================
// Pure function rules:
//   1. Same input  → always same output
//   2. No side effects (no changing outside variables, no console, no API calls inside logic)
// ============================================================

// --- Pure: depends ONLY on arguments ---
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 — always same result

// --- Pure: test verdict from inputs only ---
function getTestVerdict(actual, expected) {
  return actual === expected ? "Pass" : "Fail";
}
console.log(getTestVerdict(200, 200)); // Pass
console.log(getTestVerdict(404, 200)); // Fail

// --- Pure: calculate discount — no external state ---
function applyDiscount(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
console.log(applyDiscount(100, 10)); // 90

// ============================================================
// Impure Function (NOT pure) — for comparison
// ============================================================
// Breaks rule 1: depends on external variable `taxRate`
let taxRate = 5;
function addTaxImpure(price) {
  return price + (price * taxRate) / 100; // uses outer taxRate
}
console.log(addTaxImpure(100)); // 105
taxRate = 10; // external state changed
console.log(addTaxImpure(100)); // 110 — same input, different output → IMPURE

// Breaks rule 2: side effect (modifies external variable)
let totalRuns = 0;
function runTestImpure(testName) {
  totalRuns++; // changes variable outside the function
  console.log(`Running ${testName}`); // side effect: console.log
  return "Done";
}
runTestImpure("Login Test");

// ============================================================
// Pure vs Impure — quick table
// ============================================================
// | Function        | Same input → same output? | Side effects? | Pure? |
// |-----------------|---------------------------|---------------|-------|
// | add(2, 3)       | Yes (always 5)            | No            | Yes   |
// | getTestVerdict  | Yes                       | No            | Yes   |
// | addTaxImpure    | No (if taxRate changes)   | Uses external | No    |
// | runTestImpure   | N/A                       | Yes (totalRuns++, log) | No |
// ============================================================
