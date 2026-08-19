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

async function runE2E() {
  let step1 = await openBrowser();
  console.log(step1);
  let step2 = await goToLoginPage();
  console.log(step2);
  let step3 = await enterCredentials();
  console.log(step3);
  let step4 = await clickLoginButton();
  console.log(step4);
}

runE2E();
