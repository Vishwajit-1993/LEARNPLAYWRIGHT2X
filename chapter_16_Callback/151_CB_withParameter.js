//callback function with parameter

function greetTester(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greetTester("Vishwajit", function () {
  console.log("Lets Start The QA Test");
});

//Note: This is a callback function with parameter because the callback function is passed as an argument to the greetTester function and the greetTester function is called inside the greetTester function.

//Second way to call callback function with parameter

greetTester("Vishwajit", () => {
  console.log("Lets Start The QA Test");
});

//Third way to call callback function with parameter

function runTest(testName, callback) {
  let status = "Pass";
  callback(testName, status);
}

runTest("Login Test", function (testName, status) {
  {
    console.log(`Test ${testName} is ${status}`);
  }
});

//sync callback >>Parameter

let bug = ["Bug 1", "Bug 2", "Bug 3", "Bug 4", "Bug 5"];

bug.forEach(function (bugName, index) {
  console.log(`Bug # ${index + 1} : ${bugName}`);
});

//async callback >>Parameter

console.log("Total Bugs Found: ", bug.length);
