let env = "dev";

function config() {
  let timeout = 1000;
  console.log(`Environment is ${env}`); //dev
  console.log(`Timeout is ${timeout}`); //1000
}

config();
console.log(`Environment is ${env}`); //dev
console.log(`Timeout is ${timeout}`); //ReferenceError: timeout is not defined
