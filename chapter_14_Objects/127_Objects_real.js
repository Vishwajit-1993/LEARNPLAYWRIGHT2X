let config = {};

config.browser = "chrome";
config.url = "https://www.google.com";
config.timeout = 10000;

console.log(config);

if (config.browser === "chrome") {
  console.log("chrome browser is running");
} else {
  console.log("chrome browser is not running");
}

delete config.timeout;
console.log(config);
