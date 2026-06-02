let statusCode = 200;

console.log(`Input Status Code: ${statusCode}`);

if (statusCode >= 200 && statusCode < 299) {
  console.log(`Output: "Success"`);
} else if (statusCode >= 300 && statusCode < 399) {
  console.log(`Output: "Redirect"`);
} else if (statusCode >= 400 && statusCode < 499) {
  console.log(`Output: "Client Error"`);
} else if (statusCode >= 500 && statusCode < 599) {
  console.log(`Output: "Server Error"`);
} else {
  console.log(`Output: "Invalid Status Code"`);
}
