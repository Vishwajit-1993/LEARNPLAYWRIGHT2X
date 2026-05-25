var v = 10;
let l = 20;
const c = 30;

var browser = "chrome";
var browser = "firefox"; //redeclaration is allowed in var but not in let and const
browser = "edge"; //reassignment is allowed in var, let and const

console.log(v);
console.log(l);
console.log(c);
console.log(browser);

var testcase = ["test1", "test2", "test3"];

for (var i = 0; i < testcase.length; i++) {
  console.log("Running testcase: " + testcase[i]);
}

console.log("Loop COunter Leaked outside the loop: " + i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

//example of function scope
function SayHi() {
  console.log("Hi");
}
SayHi();
SayHi();
