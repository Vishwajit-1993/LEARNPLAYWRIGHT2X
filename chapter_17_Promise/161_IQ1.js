/* let p = new Promise(function (resolve, reject) {
  resolve(42);
});

p.then(function (value) {
  console.log("Answer:", value);
}); */
/* 
let p = new Promise(function (resolve, reject) {
  reject("Something broke");
});
p.catch(function (error) {
  console.log("Error:", error);
}); */
/* 
let p = Promise.resolve(5);

p.then(function (val) {
  console.log("Value:", val);
  return val * 10;
}).then(function (value) {
  console.log("Result:", value);
}); */

// Note: This shows how VALUES flow through a Promise chain.
//
// 1. Promise.resolve(5) creates a Promise that is ALREADY fulfilled with 5.
//    (It's a shortcut for `new Promise(resolve => resolve(5))`.)
//
// 2. First .then(): `val` receives 5, prints "Value: 5", then RETURNS val * 10
//    (= 50). Whatever you return from a .then() becomes the value passed to the
//    NEXT .then(). The return value is automatically wrapped in a new Promise.
//
// 3. Second .then(): `value` receives that 50, prints "Result: 50".
//
// Output:
//   Value: 5
//   Result: 50
//
// Key idea: .then() callbacks are CHAINED, and the RETURN value of one becomes
// the INPUT of the next. This is what makes Promise chaining so powerful.

/* Promise.resolve(1)
  .then(function (val) {
    console.log("Value:", val);
    return val + 1;
  })
  .then(function (val) {
    console.log("Value:", val);
    return val + 1;
  })
  .then(function (val) {
    console.log("Value:", val);
  }); */

// Note: A longer Promise chain showing the same "return value -> next input"
// rule across THREE .then() steps.
//
// 1. Promise.resolve(1) starts the chain fulfilled with 1.
// 2. .then #1: val = 1 -> prints "Value: 1" -> returns 1 + 1 = 2.
// 3. .then #2: val = 2 -> prints "Value: 2" -> returns 2 + 1 = 3.
// 4. .then #3: val = 3 -> prints "Value: 3" -> returns nothing (undefined).
//
// Output:
//   Value: 1
//   Value: 2
//   Value: 3
//
// Each step's returned value becomes the next step's input. The last .then()
// doesn't return anything, so the chain ends here (the next Promise would
// resolve with `undefined`).

/* Promise.resolve("start")
  .then(function (val) {
    console.log("Value:", val);
    throw new Error("Broke at step 2");
  })
  .then(function () {
    console.log("This will not run");
  })
  .catch(function (error) {
    console.log("Error:", error);
  }); */

// Note: This shows ERROR HANDLING in a Promise chain.
//
// 1. Promise.resolve("start") -> first .then() runs, prints "Value: start".
// 2. Inside that .then() we `throw new Error(...)`. Throwing inside a .then()
//    REJECTS the Promise returned by that .then().
// 3. Because the chain is now rejected, the NEXT .then() is SKIPPED entirely
//    ("This will not run" never prints). Rejection jumps straight to the
//    nearest .catch().
// 4. .catch() receives the thrown Error and prints "Error: Error: Broke at step 2".
//
// Output:
//   Value: start
//   Error: Error: Broke at step 2
//
// Key idea: a `throw` (or a reject) inside a chain skips all following .then()
// steps and is caught by the next .catch(). One .catch() at the end can handle
// errors from ANY step above it - which is why Promise chains are much cleaner
// for error handling than nested callbacks.

Promise.reject("Test Failed")
  .then(function (data) {
    console.log("Data:", data);
  })
  .catch(function (error) {
    console.log("Error:", error);
  })
  .finally(function () {
    console.log("Finally: Test Completed");
  });

// Note: This starts with an ALREADY-REJECTED Promise.
//
// 1. Promise.reject("Test Failed") creates a Promise that is immediately
//    rejected with the reason "Test Failed". (Opposite of Promise.resolve.)
// 2. .then() is for SUCCESS only, so it is SKIPPED ("Data:" never prints)
//    because the Promise is rejected, not fulfilled.
// 3. .catch() catches the rejection reason and prints "Error: Test Failed".
// 4. .finally() ALWAYS runs at the end - success or failure - so it prints
//    "Finally: Test Completed". It receives no value; it's for cleanup.
//
// Output:
//   Error: Test Failed
//   Finally: Test Completed
//
// Key idea: rejection skips .then() and goes to .catch(), while .finally()
// runs no matter what the outcome was.
