let a = 10;
let b = 20;

// ==  (loose)  — compares values; converts types if needed. 10 and 20 are both numbers and not equal → false
//== Loose Equality Operator — compares values after type conversion (coercion)
console.log(a == b); // false

// === (strict) — compares value AND type (no conversion). Same type, different values → false
//=== Strict Equality Operator — compares value AND type (no conversion)
console.log(a === b); // false

console.log(40 == "40"); // true  (string "40" converted to number 40)
console.log(40 === "40"); // false (number vs string — different types)
console.log(40 === 40); // true  (same value, same type)
console.log(40 !== "40"); // true (number vs string — different types)
console.log(40 !== 40); // false (same value, same type)
console.log(40 != "40"); // false (number vs string — different types)
console.log(40 != 40); // false (same value, same type)
console.log(40 !== 40); // false (same value, same type)
console.log(40 !== 40); // false (same value, same type)

// ==  (loose)  — "" is converted to number 0, so 0 == 0 → true (coercion makes them "equal")
console.log(0 == ""); // true

// === (strict) — number 0 vs string "" — different types, no conversion → false
console.log(0 === ""); // false
