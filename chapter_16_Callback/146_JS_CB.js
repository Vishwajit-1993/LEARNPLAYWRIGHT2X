console.log("Start");

setTimeout(function () {
  console.log("After 2 seconds");
}, 2000);

console.log("End");

// Note: This shows an asynchronous callback. `setTimeout` takes a callback
// function and a delay (2000 ms). JavaScript runs synchronous code first, so
// the output order is:
//   1. "Start"
//   2. "End"
//   3. "After 2 seconds"  (after ~2 seconds)
//
// Even though setTimeout appears before "End", its callback does NOT run
// immediately. JS registers the timer and continues, then the event loop
// pushes the callback onto the call stack only after the delay and once the
// main code has finished. This is why callbacks are key to async behavior in JS.
