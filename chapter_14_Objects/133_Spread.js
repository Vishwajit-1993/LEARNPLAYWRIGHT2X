//spread operator in objects
//objects are always constant because they are reference types

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//...is an operator that is used to spread the properties of an object into a new object
