/* async function sayHello() {
  return "Hello, QA!";
}

sayHello()
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.log(err);
  }); */

/* async function getStatus() {
  let status = await Promise.resolve(200);
  console.log(status);
}

getStatus(); */

async function testFlow() {
  let r1 = await Promise.resolve("Open Browser");
  console.log(r1);

  let r2 = await Promise.resolve("Login");
  console.log(r2);

  let r3 = await Promise.resolve("Logout");
  console.log(r3);
}

testFlow();
