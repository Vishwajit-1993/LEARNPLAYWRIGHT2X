// ============================================================
// Confusing == vs === Comparisons
// ============================================================
// ==  → loose equality (type coercion before compare)
// === → strict equality (value + type must match)
// Rule of thumb: prefer === to avoid surprises below
// ============================================================

console.log("--- 0, empty string, false ---");

console.log(0 == ""); // true  — "" converts to 0
console.log(0 === ""); // false — number vs string

console.log(0 == "0"); // true  — "0" converts to 0
console.log(0 === "0"); // false — number vs string

console.log("" == "0"); // false — both strings, compared as text (no conversion)
console.log("" === "0"); // false

console.log(0 == false); // true  — false converts to 0
console.log(0 === false); // false — number vs boolean

console.log(false == ""); // true  — both convert to 0
console.log(false === ""); // false

console.log("0" == false); // true  — both convert to 0
console.log("0" === false); // false

console.log("\n--- null and undefined ---");

console.log(null == undefined); // true  — special rule: null == undefined
console.log(null === undefined); // false — different types

console.log(null == 0); // false — null does NOT convert to 0 with ==
console.log(null === 0); // false

console.log(undefined == 0); // false
console.log("" == null); // false — null only equals undefined (with ==)

console.log("\n--- true and 1 ---");

console.log(true == 1); // true  — true converts to 1
console.log(true === 1); // false — boolean vs number

console.log(true == "1"); // true  — "1" → 1, true → 1
console.log(true === "1"); // false

console.log("\n--- NaN (Not a Number) ---");

console.log(NaN == NaN); // false — NaN is never equal to anything, even itself
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true  — use this to check for NaN

console.log("\n--- Arrays and objects (surprising!) ---");

console.log([] == ""); // true  — [] converts to "" (via toString), then "" == ""
console.log([] == 0); // true  — [] converts to 0
//console.log([] === 0); // false//
console.log([] == false); // true  — [] → 0, false → 0

console.log([1] == 1); // true  — [1] converts to "1" then to 1

// [1] === 1 → false: [1] is an array (object), 1 is a number — === needs same type, no conversion
//console.log([1] === 1); // false

console.log({} == "[object Object]"); // true  — {} converts to string "[object Object]"
//console.log({} === "[object Object]"); // false

console.log("\n--- Same type, same value ---");

console.log(5 === 5); // true
console.log(5 == "5"); // true  — coercion
console.log(5 === "5"); // false — no coercion

console.log("================================");

console.log(5 != "5"); // false
console.log(5 !== "5"); // true
