var a = 10; //global scope

console.log(a);

test();

function test() {
  var a = 20; //function scope
  console.log(a);

  if (true) {
    var a = 30;
    console.log(a);
  }
}
