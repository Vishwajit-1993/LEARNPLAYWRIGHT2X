// ============================================================
// null vs undefined in JavaScript
// ============================================================
//
// undefined — value is missing (not assigned yet, not returned, not passed)
// null      — value is intentionally empty / "no value" (assigned on purpose)
//
// | Aspect        | undefined              | null                    |
// |---------------|------------------------|-------------------------|
// | Meaning       | Not defined / missing  | Intentionally empty     |
// | typeof        | "undefined"            | "object" (JS quirk)     |
// | Set by        | JavaScript engine      | Developer (you)         |
// | == comparison | undefined == null → true (loose equality)           |
// | === comparison| undefined === null → false (strict equality)      |
// ============================================================

// --- undefined examples ---

let userName; // declared but not assigned
console.log(userName); // undefined

function getStatus() {
  // no return statement
}
console.log(getStatus()); // undefined

let config = { host: "localhost" };
console.log(config.port); // undefined (property does not exist)

function greet(name) {
  console.log("Hello, " + name);
}
greet(); // name is undefined (argument not passed)

// --- null example (intentional "no value") ---

let selectedTest = null; // explicitly: no test selected yet
console.log(selectedTest); // null

// --- typeof ---

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (historical bug in JS; use === null to check)

// --- equality ---

console.log(undefined == null); // true  (loose — avoid in real code)
console.log(undefined === null); // false (strict — preferred)

// --- checking safely ---

let value;

if (value === undefined) {
  console.log("value was never assigned");
}

if (selectedTest === null) {
  console.log("user cleared the selection on purpose");
}

// Optional: treat both as "empty" when needed
if (value == null) {
  // true for both null and undefined (loose equality shortcut)
  console.log("value is null or undefined");
}
