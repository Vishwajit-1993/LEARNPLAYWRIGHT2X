//Higher Order Function is a function that takes a function as an argument or returns a function as a result.

function runwithLogin(fn, TestName) {
  console.log(`Logging in as ${TestName}`);
  let result = fn();
  console.log(`result of ${TestName} is ${result}`);
  return result;
}

function testpass() {
  return "Test passed";
}

function testfail() {
  return "Test failed";
}

runwithLogin(testpass, "Login Test");
runwithLogin(testfail, "Login Test");
