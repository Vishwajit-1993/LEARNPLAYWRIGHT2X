function add(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
console.log(add(...numbers));
//output: 6

let responseCodes = [200, 201, 404];

function hasError(...codes) {
  return codes.some((code) => code >= 400); //some() is used to check if any of the elements of the array satisfy the condition and returns a boolean value if true then it will return true otherwise false
}
console.log(hasError(...responseCodes));
//output: true

let responseCodes2 = [200, 201, 202];
console.log(hasError(...responseCodes2));
//output: false

let responseCodes3 = [400, 401, 404];
console.log(hasError(...responseCodes3));
//output: true
