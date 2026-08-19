let testRun = new Promise(function (resolve, reject) {
  let apiCall = true;
  if (apiCall) {
    resolve({ 200: "Success" });
  } else {
    reject({ 500: "Internal Server Error" });
  }
});

testRun
  .then(function (resolve) {
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  })
  .finally(function () {
    console.log("Test Run is completed");
  });

// Note: This shows the full Promise handling chain - .then / .catch / .finally.
//
// 1. The executor runs immediately. Because `apiCall` is true, it calls
//    resolve({ 200: "Success" }), so the Promise is FULFILLED with that value.
//    (If apiCall were false, reject({ 500: ... }) would REJECT it instead.)
//
// 2. .then(callback)    -> runs ONLY when the Promise is fulfilled (resolved).
//                          Its parameter receives the resolved value
//                          ({ 200: "Success" }). Here it just logs it.
//                          (The param name `resolve` is misleading - it's the
//                          resolved VALUE, not the resolve function.)
//
// 3. .catch(callback)   -> runs ONLY when the Promise is rejected. Its parameter
//                          receives the rejection reason ({ 500: ... }). Since
//                          this run resolves, .catch is SKIPPED here.
//
// 4. .finally(callback) -> ALWAYS runs at the end, whether the Promise
//                          succeeded or failed. It gets no value - it's for
//                          cleanup/closing steps (like "Test Run is completed").
//
// Output for this run (apiCall = true):
//   { '200': 'Success' }
//   Test Run is completed
//
// Chaining works because .then and .catch each return a new Promise, so the
// calls can be linked one after another - much cleaner than nested callbacks.
