/* Promise.resolve("Quick Win").then(function (msg) {
  console.log("Message:", msg);
});

Promise.reject("Quick Loss").catch(function (error) {
  console.log("Error:", error);
}); */

/* let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
  console.log("All promises are resolved:", results);
});
 */

/* let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.reject("Search: FAIL");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3])
  .then(function (results) {
    console.log("All promises are resolved:", results);
  })
  .catch(function (error) {
    console.log("All promises are rejected:", error);
  });
 */
Promise.allSettled([
  Promise.resolve("API 200"),
  Promise.reject("API 500"),
  Promise.resolve("API 201"),
]).then(function (results) {
  results.forEach(function (r) {
    console.log(r);
    let val = r.status === "fulfilled" ? r.value : r.reason;
    console.log(r.status + " -> " + val);
  });
});

// Meaning of these two lines:
//
// `let val = r.status === "fulfilled" ? r.value : r.reason;`
//   allSettled gives each result as an object with a `status`. Its shape differs
//   depending on the outcome:
//     - success: { status: "fulfilled", value: <data> }
//     - failure: { status: "rejected",  reason: <error> }
//   This is a TERNARY (condition ? A : B). It reads:
//     "If the status is 'fulfilled', take r.value; otherwise take r.reason."
//   So `val` ends up holding the right field no matter which case it is.
//
// `console.log(r.status + " -> " + val);`
//   Prints the status and that picked value together, e.g.:
//     fulfilled -> API 200
//     rejected  -> API 500
//     fulfilled -> API 201
//
// In short: these lines normalize the two different result shapes into one
// simple "status -> value/reason" line for easy reading.
