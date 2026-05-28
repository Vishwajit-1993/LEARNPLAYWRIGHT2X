// ============================================================
// Backtick (`) vs Single Quote (') vs Double Quote (")
// ============================================================
//
// | Quote type   | Syntax   | Creates        | Main use                          |
// |--------------|----------|----------------|-----------------------------------|
// | Single       | '...'    | String         | Plain text (common in JS style)   |
// | Double       | "..."    | String         | Plain text (same as single)       |
// | Backtick     | `...`    | Template literal| Variables ${}, multiline strings |
//
// Single and double quotes behave the SAME — pick one style and stay consistent.
// Backticks are DIFFERENT — they enable template literals (ES6).
// ============================================================

// --- 1. Single quotes ('') ---
let single = 'Hello';
let withDoubleInside = 'She said "Hi"'; // double quotes inside — no escape needed

// --- 2. Double quotes ("") ---
let double = "Hello";
let withSingleInside = "It's a sunny day"; // apostrophe inside — no escape needed

// --- 3. Backticks (``) — template literal ---
let name = "Vishwajit";
let template = `Hello, ${name}!`; // ${} inserts value
let multiline = `Line 1
Line 2`; // line breaks work without \n

// --- typeof: all are strings ---
console.log(typeof single); // "string"
console.log(typeof double); // "string"
console.log(typeof template); // "string"

console.log(single);
console.log(withDoubleInside);
console.log(withSingleInside);
console.log(template);
console.log(multiline);

// --- When to use which (short guide) ---
// '...' or "..."  → simple fixed text, no variables inside the string
// `...`           → need ${variable}, expressions, or multiple lines

// Same result — different syntax:
let oldWay = "Hi " + name;
let newWay = `Hi ${name}`;
console.log(oldWay); // Hi Vishwajit
console.log(newWay); // Hi Vishwajit
