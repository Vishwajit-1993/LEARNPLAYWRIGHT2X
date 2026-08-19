//Basic Async Example

async function getTestResult() {
  return "Pass";
}

getTestResult().then(function (result) {
  console.log(result);
});

// Note: YES - an `async` function ALWAYS returns a Promise, even if you return
// a plain value like "Pass". JavaScript automatically wraps it as
// Promise.resolve("Pass"). So `getTestResult()` gives back a Promise, and
// that's why `.then()` works here. Inside the .then() callback, `result`
// receives the unwrapped value: "Pass".
//
// In short: you write `return "Pass"`, but what the caller gets is a Promise
// that resolves to "Pass".
