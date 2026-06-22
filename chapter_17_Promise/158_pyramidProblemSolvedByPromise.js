// Pyramid of Doom (callback hell) SOLVED using Promises.
// Same login flow as 149_Hell_Callback.js, but each step now returns a Promise
// instead of taking a callback. We then chain them with .then() so the code
// reads top-to-bottom instead of nesting deeper and deeper.

function openBrowser() {
  return new Promise(function (resolve) {
    resolve("Step 1: Opening browser");
  });
}

function goToLoginPage() {
  return new Promise(function (resolve) {
    resolve("Step 2: Going to login page");
  });
}

function enterCredentials() {
  return new Promise(function (resolve) {
    resolve("Step 3: Entering credentials");
  });
}

function clickLoginButton() {
  return new Promise(function (resolve) {
    resolve("Step 4: Clicking login button");
  });
}

// Promise chaining: each .then() returns the next step's Promise, so the next
// .then() waits for it to finish before running. This is the FLAT alternative
// to the nested pyramid - no rightward staircase.
openBrowser()
  .then(function (resolve) {
    console.log(resolve);
    return goToLoginPage();
  })
  .then(function (resolve) {
    console.log(resolve);
    return enterCredentials();
  })
  .then(function (resolve) {
    console.log(resolve);
    return clickLoginButton();
  })
  .then(function (resolve) {
    console.log(resolve);
    console.log("Step 5: Login successful");
  })
  .catch(function (reject) {
    console.log(reject);
  });

// Note: returning the Promise inside each .then() is what keeps the steps
// SEQUENTIAL (one after another). If you forgot to `return`, the steps would
// not wait for each other. Compare this flat chain with the nested callback
// version - same result, far more readable and easier to add error handling.
