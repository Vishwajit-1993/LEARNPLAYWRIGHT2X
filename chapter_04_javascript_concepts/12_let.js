let name = "John";
name = "Jane"; //reassignment is allowed in let but not in var
console.log(name);

let teststaus = "Pending";
if (teststaus === "Pending") {
  {
    let executionTime = 1200;
    console.log("Inside Block:" + executionTime);
  }
  console.log("Outside Block:" + executionTime);
}

//let is block scoped so it is not accessible outside the block
//var is function scoped so it is accessible outside the block
//let is not redeclared within the same block
//var is redeclared within the same block
//let is not redeclared within the same function
//var is redeclared within the same function
//let is not redeclared within the same class
//var is redeclared within the same class
//let is not redeclared within the same module
//var is redeclared within the same module
//let is not redeclared within the same namespace
//var is redeclared within the same namespace
