function apicall(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name, "200 OK");
    }, 1000);
  });
}

async function seqTest() {
  console.log("Step 1");
  let start = Date.now();

  let r1 = await apicall("Login");
  console.log(r1);

  let r2 = await apicall("Dashboard");
  console.log(r2);

  let r3 = await apicall("Logout");
  console.log(r3);

  console.log("Time taken:", Date.now() - start + "ms");
}

seqTest();
