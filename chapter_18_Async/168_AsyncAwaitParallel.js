function apicall(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name, "200 OK");
    }, 1000);
  });
}

async function parallelTest() {
  let [r1, r2, r3] = await Promise.all([
    apicall("Login"),
    apicall("Dashboard"),
    apicall("Logout"),
  ]);

  console.log(r1, r2, r3);
}

parallelTest();
