// ============================================================
// What is a Function?
// ============================================================
// A function is a reusable block of code that performs a specific task.
// You DEFINE it once, then CALL (invoke) it whenever needed.
//
// Why use functions?
// - Avoid code duplication
// - Improve readability and maintainability
// - Make code reusable and testable
// ============================================================

// ============================================================
// Types of Functions in JavaScript
// ============================================================

// --- 1. Function Declaration (named, hoisted) ---
// Can be called BEFORE it appears in the file (hoisting)
sayHello();
function sayHello() {
  console.log("Hello from function declaration");
}

// --- 2. Function Expression (assigned to a variable) ---
// NOT hoisted — must be defined before calling
const greet = function () {
  console.log("Hello from function expression");
};
greet();

// --- 3. Named Function Expression ---
// Has a name inside (useful for debugging), stored in a variable
const multiply = function mul(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// --- 4. Arrow Function (ES6) ---
// Shorter syntax, no own "this" (important later)
const add = (a, b) => a + b;
console.log(add(10, 20)); // 30

const square = (n) => n * n;
console.log(square(5)); // 25

// --- 5. Anonymous Function ---
// No function name — often used as callback
setTimeout(function () {
  console.log("Anonymous function after 0ms");
}, 0);

// Arrow version of anonymous function
setTimeout(() => {
  console.log("Anonymous arrow function after 0ms");
}, 0);

// --- 6. IIFE — Immediately Invoked Function Expression ---
// Runs immediately after it is defined
(function () {
  console.log("IIFE runs once immediately");
})();

// --- 7. Function with parameters and return value ---
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("Vishwajit", "Patil"));

// --- 8. Default parameters (ES6) ---
function launchBrowser(browser = "chrome") {
  console.log("Launching:", browser);
}
launchBrowser(); // chrome
launchBrowser("firefox");

// --- 9. Rest parameters (...args) ---
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// --- 10. Async Function (ES2017) — for Promises / await ---
async function fetchData() {
  return "data loaded";
}
fetchData().then((result) => console.log(result));

// --- 11. Generator Function (ES6) — yields values one at a time ---
function* idGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// ============================================================
// Quick comparison
// ============================================================
// | Type                  | Syntax              | Hoisted? |
// |-----------------------|---------------------|----------|
// | Function declaration  | function name() {}  | Yes      |
// | Function expression   | const f = function(){} | No    |
// | Arrow function        | const f = () => {}  | No       |
// | IIFE                  | (function(){})()    | No       |
// | Async function        | async function f(){}| No       |
// | Generator function    | function* f(){}     | No       |
// ============================================================
