// ============================================================
// Increment (++) and Decrement (--) Operators
// ============================================================
// ++  → add 1 to a variable
// --  → subtract 1 from a variable
//
// Two forms:
//   Postfix  a++ / a--  → use current value FIRST, then change variable
//   Prefix   ++a / --a  → change variable FIRST, then use new value
// ============================================================

// --- Postfix: a++ (value used first, then +1) ---
let a = 10;
console.log(a++); // 10  (prints old value, then a becomes 11)
console.log(a); // 11

// --- Prefix: ++a (value +1 first, then use) ---
let b = 10;
console.log(++b); // 11  (b becomes 11 first, then prints 11)
console.log(b); // 11

// --- Decrement examples ---
let c = 10;
console.log(c--); // 10  (prints 10, then c becomes 9)
console.log(c); // 9

let d = 10;
console.log(--d); // 9   (d becomes 9 first, then prints 9)
console.log(d); // 9

// --- Shorthand (same as a = a + 1 / a = a - 1) ---
let count = 5;
count++;
console.log(count); // 6

count--;
console.log(count); // 5

// ============================================================
// Increment / Decrement with Comparison Operators
// ============================================================
// Postfix returns OLD value → comparison uses old value
// Prefix returns NEW value → comparison uses new value
// ============================================================

let x = 5;
console.log(x++ == 5); // true  — x++ returns 5, then x becomes 6
console.log(x); // 6

let y = 5;
console.log(y++ == 6); // false — y++ returns 5 (not 6 yet), then y becomes 6
console.log(y); // 6

let m = 5;
console.log(++m == 6); // true  — m becomes 6 first, then compared to 6
console.log(m); // 6

let n = 5;
console.log(++n === 6); // true  — strict compare: number 6 === number 6
console.log(n-- === 6); // true  — n is still 6 when compared, then n becomes 5
console.log(n); // 5

let score = 10;
console.log(score++ > 10); // false — score++ returns 10, 10 > 10 is false
console.log(++score > 10); // true  — score becomes 11, 11 > 10 is true

// Practical: check before and after increment
let retries = 2;
let canRetry = retries++ < 3; // retries++ returns 2, 2 < 3 → true, then retries = 3
console.log(canRetry); // true
console.log(retries); // 3
