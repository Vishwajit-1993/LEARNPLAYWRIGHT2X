//Comparison Operators
//used to compare two variables (left side of the operator)
let a = 10;
let b = 20;
console.log(a == b); //false
console.log(a != b); //true
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
console.log(a === b); //false
console.log(a !== b); //true

//= Assignment Operator
//== Loose Equality Operator — compares values after type conversion (coercion)
console.log(5 == "5"); // true  (string "5" converted to number 5)
console.log(0 == false); // true  (false converted to 0)
console.log(null == undefined); // true

//=== Strict Equality Operator — compares value AND type (no conversion)
console.log(5 === "5"); // false (number vs string — different types)
console.log(0 === false); // false (number vs boolean)
console.log(null === undefined); // false
console.log(5 === 5); // true  (same value, same type)
//!= Not Equal Operator
//!== Not Strict Equal Operator
//> Greater Than Operator
//< Less Than Operator
//>= Greater Than or Equal Operator
//<= Less Than or Equal Operator
