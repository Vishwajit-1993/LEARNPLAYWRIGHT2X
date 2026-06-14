let config = { browser: "chrome", browserVersion: "120" };
config.browser = "firefox";
config.browserVersion = "121";
config.timeout = 5000;

console.log(config);
config = { browser: "safari" };
console.log(config);
//in case of let it is possible to reassign the object but in case of const it is not possible to reassign the object

const config2 = { browser: "chrome", browserVersion: "120" };
config2.browser = "firefox";
config2.browserVersion = "121";
console.log(config2);

config2 = { browser: "safari" };
console.log(config2);
//in case of const it is not possible to reassign the object
