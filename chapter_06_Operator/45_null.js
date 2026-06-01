// ============================================================
// null and Nullish Coalescing Operator (??)
// ============================================================
// null — intentional "no value" (you assign it on purpose)
// typeof null → "object" (known JavaScript quirk)
//
// ?? (Nullish Coalescing) — returns RIGHT side only when LEFT is null or undefined
// Does NOT treat 0, "", or false as "empty" (unlike ||)
// ============================================================

// --- null basics ---
let selectedBrowser = null; // no browser selected yet
console.log(selectedBrowser); // null
console.log(typeof null); // "object"

let apiResponse = { data: null }; // API returned empty on purpose
console.log(apiResponse.data); // null

// --- ?? operator examples ---
let userName = null;
let displayName = userName ?? "Guest"; // null → use "Guest"
console.log(displayName); // Guest

let age = undefined;
let showAge = age ?? 18; // undefined → use 18
console.log(showAge); // 18

let score = 0;
let finalScore = score ?? 100; // 0 is NOT null/undefined → keep 0
console.log(finalScore); // 0

let message = "";
let greeting = message ?? "Hello"; // "" is NOT null/undefined → keep ""
console.log(greeting); // (empty string)

let isActive = false;
let status = isActive ?? true; // false is NOT null/undefined → keep false
console.log(status); // false

// --- ?? vs || (important difference) ---
let retries = 0;

// || (OR) — if left is falsy (0, "", false, null, undefined), use right side
// retries is 0 (falsy) → skip 0, return 3
console.log(retries || 3); // 3

// ?? (nullish) — if left is ONLY null or undefined, use right side
// retries is 0 (valid number, not nullish) → keep 0
console.log(retries ?? 3); // 0

let testName = "";

// || (OR) — "" is falsy, so use right side "Default Test"
console.log(testName || "Default Test"); // Default Test

// ?? (nullish) — "" is NOT null/undefined, so keep the empty string
console.log(testName ?? "Default Test"); // (empty string)

// --- nested / chained ?? ---
// ?? is evaluated LEFT to RIGHT — each step only uses the next value if current is null/undefined
let config = {
  timeout: null, // nullish
  retries: undefined, // nullish
};

// Step 1: config.timeout is null     → try next (config.retries)
// Step 2: config.retries is undefined → try next (5000)
// Step 3: 5000 is NOT nullish        → return 5000
// Result is 5000, NOT undefined — 5000 is the final fallback default
let timeout = config.timeout ?? config.retries ?? 5000;
console.log(timeout); // 5000

// If you want undefined when both are missing, do NOT add a fallback:
// let timeout2 = config.timeout ?? config.retries; // undefined

// --- ??= (Nullish assignment) — assign only if current value is null/undefined ---
let port = null;
port ??= 3000; // port is null → assign 3000
console.log(port); // 3000

port ??= 8080; // port is 3000 (not nullish) → stays 3000
console.log(port); // 3000

// --- checking null safely ---
let result = null;
if (result === null) {
  console.log("Result is intentionally empty");
}

// null == undefined → true (loose), null === undefined → false (strict)
console.log(null == undefined); // true
console.log(null === undefined); // false
