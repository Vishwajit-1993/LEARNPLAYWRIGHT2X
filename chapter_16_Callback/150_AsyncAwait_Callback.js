//Real QA scenario: End to End for the App.vwo.com
//Same example as 149_Hell_Callback.js, but rewritten with Promises + async/await
//to avoid callback hell (the Pyramid of Doom).

//Each step now returns a Promise that resolves after the delay, instead of
//taking a callback. This lets us "await" each step one after another.

function openBrowser() {
  return new Promise(function (resolve) {
    console.log("Step 1:Opening browser");
    setTimeout(resolve, 2000);
  });
}

function goToLoginPage() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 2: Going to login page");
      resolve();
    }, 2000);
  });
}

function enterCredentials() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 3: Entering credentials");
      resolve();
    }, 2000);
  });
}

function clickLoginButton() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Step 4: Clicking login button");
      resolve();
    }, 1000);
  });
}

//With async/await the steps read top-to-bottom like normal synchronous code,
//but each `await` pauses until that step's Promise resolves. No nesting!
async function runLoginFlow() {
  await openBrowser();
  await goToLoginPage();
  await enterCredentials();
  await clickLoginButton();
  console.log("Step 5: Login successful");
}

runLoginFlow();

//Compare this flat, readable structure with the nested "callback hell" in
//149_Hell_Callback.js. async/await is just syntactic sugar over Promises that
//makes asynchronous code easier to read and maintain.
