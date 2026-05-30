console.log(0 == ""); // true (empty string is converted 0)
console.log(0 == "0"); //true (0 string is converted to number 0 and then compared to 0)
// Both sides are strings → == does NOT convert types (same type = compare directly like ===)
// "" and "0" are different string values → false
console.log("" == "0"); // false

console.log(0 == false); // true (0 is converted to false)
console.log(null == 0); // false (null is not converted to number 0)
console.log(null == undefined); // true (null and undefined are considered equal)
console.log(null === undefined); // false (null and undefined are different types)
