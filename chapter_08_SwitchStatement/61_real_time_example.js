let responseCode = 400;

switch (responseCode) {
  case 200:
    console.log("Success");
    break;
  case 400:
    console.log("Bad Request");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 403:
    console.log("Forbidden");
    break;
  default:
    console.log("Status Code is not valid");
}
