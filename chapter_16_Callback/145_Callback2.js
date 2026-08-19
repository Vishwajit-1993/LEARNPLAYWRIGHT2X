//callback function in playwright

function test(testName, callback) {
  console.log(`Running test: ${testName}`);
  callback();
}
//above test function is a callback function because it is passed as an argument to the test function and the test function is called inside the test function.
test("verify login page is working", () => {
  //write code to verify login page is working
  console.log("Login page is working");
});
