function greet(name) {
  //return "Hello " + name;
  return `Hello , ${name}`;
}
console.log(greet("Vishwajit"));
// output: Hello , Vishwajit

let greet2 = greet;
console.log(greet2("Amit"));
// output: Hello , Amit

let greet3 = greet("Vishwajit");
console.log(greet3);
// output: Hello , Vishwajit

let greet4 = greet("Amit");
console.log(greet4);
// output: Hello , Amit
