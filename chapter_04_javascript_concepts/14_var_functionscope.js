var a = 10;
console.log(a);

function test() {
  var a = 20;
  console.log(a);
  if (true) {
    var a = 30;
    console.log(a);
  }
  console.log("Outside Block:" + a);
}

test();
console.log("Outside Function:" + a);

/* Function Scoped (var)

A variable declared with var is available throughout the entire function where it is declared.

function test() {
    if (true) {
        var message = "Hello";
    }

    console.log(message); // ✅ Works
}

test();

Even though message was declared inside the if block, it is still accessible outside the block because var is function scoped.
 */
