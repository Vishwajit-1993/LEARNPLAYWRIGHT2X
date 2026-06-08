// if statusCode >= 200 && statusCode < 300 → "Success", else → "Error"

// 1. Function declaration — named function, hoisted, uses if/else block
function validateStatusCode(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return "Success";
  } else {
    return "Error";
  }
}
console.log(validateStatusCode(200)); // Success
console.log(validateStatusCode(400)); // Error

// 2. Arrow function (block body) — stored in variable, NOT hoisted, same logic as #1
const validateStatusCode2 = (statusCode) => {
  if (statusCode >= 200 && statusCode < 300) {
    return "Success";
  } else {
    return "Error";
  }
};
console.log(validateStatusCode2(200)); // Success
console.log(validateStatusCode2(400)); // Error

// 3. Arrow function + ternary — shortest form, one-line return, same result as #1 and #2
const validateStatusCode3 = (statusCode) => {
  return statusCode >= 200 && statusCode < 300 ? "Success" : "Error";
};
console.log(validateStatusCode3(200)); // Success
console.log(validateStatusCode3(400)); // Error

// ============================================================
// Comparison Table — All Three Functions
// ============================================================
// | Feature              | validateStatusCode   | validateStatusCode2 | validateStatusCode3      |
// |----------------------|----------------------|---------------------|--------------------------|
// | Type                 | Function declaration | Arrow function      | Arrow function           |
// | Syntax               | function name() {}   | const f = () => {}  | const f = () => { return |
// |                      |                      |                     |   condition ? A : B }    |
// | Stored in variable   | No (standalone name) | Yes (const)         | Yes (const)              |
// | Hoisted              | Yes                  | No                  | No                       |
// | Call before define   | Yes                  | No                  | No                       |
// | Body style           | if / else block      | if / else block     | Ternary (? :)            |
// | Lines of code        | More (5–7 lines)     | More (5–7 lines)    | Less (1–2 lines)         |
// | Readability          | Classic, clear       | Modern ES6 style    | Compact, concise         |
// | Output (200)         | "Success"            | "Success"           | "Success"                |
// | Output (400)         | "Error"              | "Error"             | "Error"                  |
// | Logic / Result       | Same                 | Same                | Same                     |
// ============================================================
// Summary: Same behavior — choose based on style (declaration vs arrow) and length (if/else vs ternary)
