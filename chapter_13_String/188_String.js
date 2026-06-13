let str = "Hello World";
//created using single quotes

let str2 = "Hello World";
//created using double quotes

let name = "John";
let msg = `Hello, ${name}! 2+2=${2 + 2}`;
console.log(msg);

let report = `
Test: Login
Status: Pass
Duration:320ms `;
// multiline string

console.log(String(123)); //"123"
console.log(String(true)); //"true"
console.log(String(false)); //"false"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(Symbol("test"))); //"Symbol(test)"
console.log(String({ a: 1 })); //"[object Object]"
console.log(String([1, 2, 3])); //"1,2,3"
//String created using an String class>>this will create an anything into a string refer above example

//string is an datatype in javascript
//String is an interface in javascript
