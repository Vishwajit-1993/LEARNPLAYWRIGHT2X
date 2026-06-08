//Arrow Function is a new way to write functions in JavaScript

const greet2 = (name) => "Hi " + name;
console.log(greet2("Vishwajit"));
let r2 = greet2("Vishwajit");
console.log(r2); //output: HiVishwajit

const doubltIt = (a) => a * 2;
console.log(doubltIt(10));
//output: 20

const printIt = (name) => console.log(name);
printIt("Vishwajit");
//output: Vishwajit

const printIt2 = () => console.log("Hello");
printIt2();

const printIt3 = () => "HELLO";
console.log(printIt3());

const printIt4 = (name) => {
  const message = `Hello ${name}`;
  return message;
};
console.log(printIt4("Vishwajit"));
//output: Hello Vishwajit

//when arroww function has multiple lines, we need to use return statement
