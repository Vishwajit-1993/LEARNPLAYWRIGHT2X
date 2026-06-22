// Difference between a CALLBACK-based function and a PROMISE-based function.
// (Renamed the two functions so they don't clash - in JS, two functions with
//  the same name in the same scope would override each other.)

// ---------- 1) CALLBACK VERSION ----------
function openBrowserCallback(callback) {
  console.log("Step 1: Opening browser (callback)");
  setTimeout(function () {
    callback();
  }, 2000);
}

// ---------- 2) PROMISE VERSION ----------
function openBrowserPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Step 1: Opening browser (promise)");
    }, 2000);
  });
}

// ---------- HOW TO CALL EACH ----------

// Callback version: you PASS a function in. openBrowserCallback decides when to
// run it (after 2s). The result/next step lives INSIDE the callback you pass.
openBrowserCallback(function () {
  console.log("Callback finished -> do the next step here");
});

// Promise version: you get a Promise BACK. You attach .then() to react when it
// finishes. The value passed to resolve() arrives as the .then() parameter.
openBrowserPromise().then(function (message) {
  console.log(message);
  console.log("Promise finished -> do the next step here");
});

/*
DIFFERENCE / HOW THEY WORK WHEN CALLED
--------------------------------------------------------------------
                | Callback version            | Promise version
--------------------------------------------------------------------
What you give   | You PASS a function in      | You pass nothing (or data);
                | (the callback)              | you receive a Promise back
--------------------------------------------------------------------
How you get the | Inside the callback body    | Via .then() (and .catch()
result          | you provided                | for errors, .finally() for end)
--------------------------------------------------------------------
Control of flow | The function calls your     | YOU chain .then() in the order
                | callback when ready         | you want; each returns a Promise
--------------------------------------------------------------------
Chaining many   | Leads to nesting -> the     | Flat .then().then() chain -
steps           | Pyramid of Doom             | much more readable
--------------------------------------------------------------------
Error handling  | Manual (often an extra      | Built in via .catch()
                | error/err argument)         |
--------------------------------------------------------------------

Both do the SAME job (run a step, then continue). The Promise version is just a
cleaner, more scalable way to manage asynchronous work - especially when many
steps depend on each other.
*/
