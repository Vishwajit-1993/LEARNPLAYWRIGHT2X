/* let checkAuth = Promise.resolve("User is authenticated");
let checkDB = Promise.resolve("DB is connected");
let checkCache = Promise.resolve("Cache is loaded");

Promise.all([checkAuth, checkDB, checkCache])
  .then(([auth, db, cache]) => {
    console.log("All promises are resolved");
    console.log(auth);
    console.log(db);
    console.log(cache);
  })
  .catch((error) => {
    console.log("All promises are rejected");
    console.log(error);
  })
  .finally(() => {
    console.log("All promises are completed");
  });

console.log("--------------------------------");

/* Promise.all([
  Promise.resolve("User is authenticated"),
  Promise.reject("DB is not connected"),
  Promise.resolve("Cache is loaded"),
])
  .then(function (resolve) {
    console.log("All promises are resolved");
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log("All promises are rejected");
    console.log(reject);
  })
  .finally(function () {
    console.log("All promises are completed");
  });
 */

// ---------- Promise.allSettled ----------
// Difference from Promise.all:
//   - Promise.all       -> FAILS FAST. If ANY promise rejects, the whole thing
//                          goes to .catch() and you lose the successful results.
//   - Promise.allSettled -> NEVER rejects. It waits for EVERY promise to finish
//                          (settle) and gives you the outcome of each one,
//                          whether it succeeded or failed.
//
// Each result object looks like:
//   { status: "fulfilled", value: <resolved value> }   // on success
//   { status: "rejected",  reason: <rejection reason> } // on failure

let checkAuth = Promise.resolve("User is authenticated");
let checkDB = Promise.reject("DB is not connected");
let checkCache = Promise.resolve("Cache is loaded");

Promise.allSettled([checkAuth, checkDB, checkCache])
  .then(function (results) {
    console.log("All promises have settled (finished):");
    results.forEach(function (result, index) {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1}: SUCCESS ->`, result.value);
      } else {
        console.log(`Promise ${index + 1}: FAILED  ->`, result.reason);
      }
    });
  })
  .finally(function () {
    console.log("allSettled is completed");
  });

// Expected output:
// All promises have settled (finished):
// Promise 1: SUCCESS -> User is authenticated
// Promise 2: FAILED  -> DB is not connected
// Promise 3: SUCCESS -> Cache is loaded
// allSettled is completed
//
// Notice: even though checkDB rejected, we STILL get the results of checkAuth
// and checkCache. With Promise.all, that one rejection would have skipped
// straight to .catch() and hidden the successful ones.
