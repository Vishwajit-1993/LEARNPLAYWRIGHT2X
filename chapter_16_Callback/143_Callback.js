//callback function is a function that is passed as an argument to another function

function print() {
  console.log("Normal Function is Called");
}

function placeOrder(Item, callback) {
  console.log(`Order placed for ${Item}`);
  callback();
}

placeOrder("Pizza", print);

// Note: This is a callback example because `print` is passed into `placeOrder`
// as the `callback` argument (not called with print()), and `placeOrder`
// decides when to invoke it via `callback()`. So `print` runs only after the
// order is placed.

//Second way to call callback function

placeOrder("Pizza", function () {
  console.log("Callback Function is Called");
});

// Note: This is an anonymous (inline) callback. Instead of defining a named
// function first, the function is created directly inside the placeOrder call
// and passed as the `callback` argument. It behaves the same as passing `print`,
// but is handy for one-off logic you don't need to reuse elsewhere.

//Third way to call callback function

placeOrder("VadaPav", () => {
  console.log("Callback Function is Called");
});

// Note: This is an arrow-function callback. It does the same thing as the
// anonymous function above, just written with the shorter `() => {}` syntax.
// Arrow functions are more concise and don't bind their own `this`, which is
// why they're commonly used as callbacks.
