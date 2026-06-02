let expectedResult = "Login Successful";
let actualResult = "Invalid Credentials";

console.log(`Expected Result: ${expectedResult}`);
console.log(`Actual Result: ${actualResult}`);

if (expectedResult === actualResult) {
  console.log(`Output: "✅ Test Case Passed"`);
} else {
  console.log(
    `Output: "❌ Test Case Failed - Expected Result: ${expectedResult} Got: ${actualResult}"`,
  );
}
