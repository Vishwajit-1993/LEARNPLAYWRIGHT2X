// ============================================================
// Closure in Function
// ============================================================
// Closure = inner function that REMEMBERS variables from its parent
// even AFTER the parent function has finished running.
// ============================================================

// --- Example 1: inner function closes over `message` ---
function outer() {
  let message = "Hello from closure";
  console.log("outer function is running");

  // inner has access to `message` from outer (lexical scope)
  function inner() {
    console.log(message);
  }

  return inner; // return inner function — outer() finishes here
}

const sayMessage = outer(); // outer runs, returns inner, then outer is "closed"
sayMessage(); // still prints message → closure keeps `message` alive
// Output: Hello from closure

// --- Example 2: counter — each closure has its own private count ---
function createCounter(start) {
  let count = start; // private variable — not accessible from outside

  return function () {
    count++; // inner remembers and updates `count`
    console.log(count);
  };
}

const counterA = createCounter(0);
counterA(); // 1
counterA(); // 2
counterA(); // 3

const counterB = createCounter(10); // separate closure — own `count`
counterB(); // 11
counterB(); // 12

// --- Example 3: Playwright-style — retry helper remembers maxRetries ---
function createRetryLogger(maxRetries) {
  let attempt = 0;

  return function (testName) {
    attempt++;
    console.log(`${testName} — attempt ${attempt} of ${maxRetries}`);
  };
}

const logRetry = createRetryLogger(3);
logRetry("Login Test"); // Login Test — attempt 1 of 3
logRetry("Login Test"); // Login Test — attempt 2 of 3

// NOTE: count, message, attempt, maxRetries are NOT global —
// only the returned inner functions can access them (closure)

//closure is not used in Automation
