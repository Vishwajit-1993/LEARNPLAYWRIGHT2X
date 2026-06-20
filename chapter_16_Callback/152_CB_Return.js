function calculate(a, b, operation) {
  return operation(a, b);
}

let sum = calculate(10, 20, function (a, b) {
  return a + b;
});

console.log(sum);
