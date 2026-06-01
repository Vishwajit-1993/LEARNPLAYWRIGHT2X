//Ternary Operator
//used to perform a conditional operation on a variable (left side of the operator)

let vishwa_age = 56;
let vishwa_is_adult = vishwa_age >= 18 ? "Yes" : "No";
console.log(vishwa_is_adult);

let vishwa_is_child = vishwa_age < 18 ? "Yes" : "No";
console.log(vishwa_is_child);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:" + browserMode + " mode");

let actucalStatuscode = 200;
let expectedStatuscode = 200;
let testResult = actucalStatuscode === expectedStatuscode ? "Pass" : "Fail";
console.log(testResult);

let environment = "Prod";
let url =
  environment === "dev"
    ? "https://dev.example.com"
    : "https://prod.example.com";
console.log(url);

let responseTime = 1850;
let SLA = 1000;
let SLAstatus = responseTime <= SLA ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${SLAstatus}`);

//Nested Ternary Operator
let age = 17;
let isAdult =
  age >= 18
    ? age >= 26
      ? "Yes,he can go goa and drink alcohol"
      : "Yes, he can go goa and cannot drink alcohol"
    : "No, he can not goa";
console.log(isAdult);

let statusCode = 410;
let category =
  statusCode < 300
    ? "Success"
    : statusCode < 400
      ? "Redirect"
      : statusCode < 500
        ? "Client Error"
        : "Server Error";
console.log(`Status Code: ${statusCode} - ${category}`);

let a = 2;
b = 2;
c = 3;
let max = a > b ? a : b > c ? b : c;
console.log(`Max number from ${a} and ${b} and ${c} is: ${max}`);
