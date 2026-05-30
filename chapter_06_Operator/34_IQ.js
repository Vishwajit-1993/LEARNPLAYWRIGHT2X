//Compound Assignment Operators
//used to perform arithmetic operations on variables and assign the result to the variable (left side of the operator)

let a = 10;
a += 10;
console.log(a); //20
a -= 10;
console.log(a); //10
a *= 10;
console.log(a); //100
a /= 10;
console.log(a); //10
a %= 10;
console.log(a); //0

// **= is exponentiation assignment: a **= 10 means a = a ** 10 (a raised to power 10)
// 10 ** 10 = 10×10×10... (10 times) = 10,000,000,000 → output: 10000000000
a = 10;
a **= 10;
console.log(a); //10000000000
