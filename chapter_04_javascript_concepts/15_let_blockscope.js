let a = 10;
console.log(a);

function test() {
  let a = 20;
  // let a = 55; //redeclaration is not allowed in let in same block scope
  console.log(a);
  if (true) {
    let a = 30;
    console.log(a);
  }
  console.log("Outside Block:" + a);
}

test();
console.log("Outside Function:" + a);
