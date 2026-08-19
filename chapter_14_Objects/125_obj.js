let student = { name: "John", age: 20, city: "New York" };
let student2 = { name: "Jane", age: 21, city: "Los Angeles" };
let student3 = { name: "Jim", age: 22, city: "Chicago" };

//key will not be in quotes
//If we use quotes, it will be treated as a string and it is actually json not an object

let a = { status: "pass" };
/* console.log(a.status);
console.log(a["status"]);

let a1 = { status: "pass" };
console.log(a1.status); */

//Objects are copied by reference
let b = a;
console.log(b.status);
b.status = "fail";
console.log(b.status);
console.log(a.status);
