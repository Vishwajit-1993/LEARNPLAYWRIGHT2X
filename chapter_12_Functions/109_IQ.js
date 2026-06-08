/* function logTest(name) {
  console.log(`Test ${name} ran`); //Log the test name
}

let result = logTest("Login Test");
console.log(result); //undefined */

/* greet("Vishwajit");
function greet(name) {
  return `Hello ${name}`;
} */
// greet() is called BEFORE its definition — still works (function declaration is HOISTED)
// Return value: "Hello Vishwajit" — but NOTHING prints because there is no console.log
// To see output, use: console.log(greet("Vishwajit"));  →  Hello Vishwajit

greet("Vishwajit");
const greet = function (name) {
  return `Hello ${name}`;
};
// Function EXPRESSION (const) — NOT hoisted like function declaration
// greet is in Temporal Dead Zone (TDZ) until line 17 runs
// Calling greet() before const greet = ... → ReferenceError: Cannot access 'greet' before initialization
// Output: ERROR (program stops) — no "Hello Vishwajit"
// Fix: define FIRST, then call → console.log(greet("Vishwajit"));  →  Hello Vishwajit
