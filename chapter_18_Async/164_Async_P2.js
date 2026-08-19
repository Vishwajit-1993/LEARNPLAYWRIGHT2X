function getToken() {
  return Promise.resolve("token");
}

async function run() {
  let token = await getToken();
  console.log(token);
}

run();

// Note: We use `await` because `getToken()` returns a Promise, not the token
// string directly. `await` pauses `run()` until that Promise settles, then
// unwraps the resolved value into `token` (so token = "token", not a Promise).
// Without await, `token` would be a Promise object and console.log would print
// Promise { 'token' } instead of "token". await lets us write async code in a
// clean, top-to-bottom style instead of chaining .then().
