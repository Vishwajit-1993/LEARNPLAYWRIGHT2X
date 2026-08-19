// primitive vs reference types

// number is a PRIMITIVE — copied by VALUE, not by reference
// let b = a copies 10 into b; changing b does NOT affect a
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — unchanged (a and b are separate copies)
console.log(b); // 20

//object is a REFERENCE TYPE — copied by REFERENCE, not by VALUE
let c = { value: 10 };
let d = c; //d is a reference to c
d.value = 20; //changing d affects c
console.log(c.value); //20
console.log(d.value); //20

//array is a REFERENCE TYPE — copied by REFERENCE, not by VALUE
let e = [1, 2, 3];
let f = e; //f is a reference to e
f.push(4);
console.log(e); //[1,2,3,4]
console.log(f); //[1,2,3,4]

//function is a REFERENCE TYPE — copied by REFERENCE, not by VALUE
let g = function () {
  console.log("Hello");
};
let h = g;
h(); //Hello
console.log(g); //[Function: g]
console.log(h); //[Function: g]

//primitive = number, string, boolean, null, undefined
//reference = object, array, function
