//synchronous callback

let testResult = ["pass", "fail", "pass", "fail", "skip"];

testResult.forEach(function (result, index) {
  console.log(`Test ${index} result: ${result}`);
});

//Note: This shows a synchronous callback. `forEach` takes a callback function
// and executes it for each element in the array. The callback is synchronous
// because it runs immediately for each element, not after a delay.
