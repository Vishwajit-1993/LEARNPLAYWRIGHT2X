let a = 2;
b = 2;
c = 3;
let max = a > b ? a : b > c ? b : c;
console.log(`Max number from ${a} and ${b} and ${c} is: ${max}`);

let temperature = 10;

let feel =
  temperature >= 40
    ? "Very Hot"
    : temperature >= 30
      ? "Hot"
      : temperature >= 20
        ? "Warm"
        : temperature >= 10
          ? "Cool"
          : "Very Cold";

console.log(`The temperature is ${temperature} and it feels ${feel}`);
//console.log(typeof feel);

console.log("7. Temperature is ", temperature, "| Feel", feel);
