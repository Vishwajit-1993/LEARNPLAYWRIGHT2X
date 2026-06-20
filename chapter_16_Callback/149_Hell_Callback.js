//Real QA scenario: End to End for the App.vwo.com

function openBrowser(callback) {
  console.log("Step 1:Opening browser");
  setTimeout(function () {
    callback();
  }, 2000);
}

function goToLoginPage(callback) {
  setTimeout(function () {
    console.log("Step 2: Going to login page");
    callback();
  }, 2000);
}

function enterCredentials(callback) {
  setTimeout(function () {
    console.log("Step 3:Going to login page");
    callback();
  }, 2000);
}

function clickLoginButton(callback) {
  setTimeout(function () {
    console.log("Step 4: Clicking login button");
    callback();
  }, 1000);
}

//This is callback hell because we are nesting callbacks inside each other.
openBrowser(function () {
  goToLoginPage(function () {
    enterCredentials(function () {
      clickLoginButton(function () {
        console.log("Step 5: Login successful");
      });
    });
  });
});

//This is callback hell because we are nesting callbacks inside each other.This is also called Pyramid of Doom.
//We can avoid callback hell by using Promises or async/await.
