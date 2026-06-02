let statusCode = 401;

if (statusCode === 200) {
  console.log("Success");
} else if (statusCode === 400) {
  console.log("Bad Request");
} else if (statusCode === 401) {
  console.log("Unauthorized");
} else if (statusCode === 403) {
  console.log("Forbidden");
} else {
  console.log("Status Code is not valid");
}
