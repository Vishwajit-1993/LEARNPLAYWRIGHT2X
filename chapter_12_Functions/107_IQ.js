function runTest(name, status, duration) {
  return `Test ${name} ran for ${duration} seconds and ${status}`;
}

const result = runTest("Login Test", "Pass", 10);
console.log(result);
//output: Test Login Test ran for 10 seconds and Pass
