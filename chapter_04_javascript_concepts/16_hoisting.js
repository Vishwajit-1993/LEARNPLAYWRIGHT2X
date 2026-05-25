var greeting; //HOISTING: var declaration is hoisted to the top of the scope WITH UNDEFINED VALUE
console.log(greeting); //PRINT UNDEFINED

greeting = "Hello"; //ASSIGNMENT IS NOT HOISTED
console.log(greeting); //PRINT HELLO
