//String property

let str = "Hello World";
console.log(str.length); // 11 — length counts characters (not zero-based)

// str[0] vs str.at(0) — same result for valid positive index
// str[0]   → bracket notation, index starts at 0, NO negative index (str[-1] → undefined)
// str.at(0) → .at() method (ES2022), supports negative index (str.at(-1) → last char)
console.log(str[0]); // H — first character (index 0)
console.log(str.at(0)); // H — same as str[0]
console.log(str[7]); // o — character at index 7

console.log(str.at(-1)); // d — last character (negative index counts from end)
console.log(str.at(-7)); // o — 7th character from the end
console.log(str[-1]); // undefined — brackets do NOT support negative index
console.log(str.toUpperCase()); //"HELLO WORLD"
console.log(str.toLowerCase()); //"hello world"

// charAt(index) — older method to get character at index (returns a string)
// charAt(0) → "H" (same as str[0] and str.at(0) for valid index)
// Invalid index (negative or out of range) → "" (empty string), NOT undefined
console.log(str.charAt(0)); // "H"
console.log(str.charAt(1)); //"e"
console.log(str.charAt(2)); //"l"
console.log(str.charAt(3)); //"l"
console.log(str.charAt(4)); //"o"
console.log(str.charAt(5)); //" "
console.log(str.charAt(6)); //"W"
console.log(str.charAt(7)); //"o"
console.log("--------------------------------"); //""
console.log(str.charCodeAt(0)); //72>>ASCII value of H
