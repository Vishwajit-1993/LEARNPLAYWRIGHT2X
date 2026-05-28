// ============================================================
// Template Literal (ES6)
// ============================================================
// A template literal is a STRING LITERAL written with backticks (`)
// instead of single ('') or double ("") quotes.
//
// Why "Template"?
//   The string acts like a TEMPLATE — fixed text with "slots" you fill in.
//   Slots are written as ${expression} and are replaced at runtime.
//
//   Template:     `Hi ${firstName} Patil`
//                    ↑ fixed    ↑ slot (filled with variable value)
//
// Regular string (concatenation — older style):
//   "Hi " + firstName + " Patil"
//
// Template literal (same result, cleaner):
//   `Hi ${firstName} Patil`
// ============================================================

let firstName = "Vishwajit";

// Backticks (`) + ${} = template literal
// ${firstName} is an embedded expression — JS evaluates it and inserts the value
let fullName = `Hi ${firstName} Patil`;

console.log(fullName); // Hi Vishwajit Patil

// ${} can hold any expression, not only variables:
let age = 30;
console.log(`${firstName} is ${age} years old`); // Vishwajit is 30 years old

// NOTE: Left side vs right side in `2 + 2 = ${2 + 2}`
//   Left side  (outside ${}) → plain text, printed as-is:  "2 + 2 = "
//   Right side (inside ${})  → expression, JS runs it first: 2 + 2 → 4
//
//   `2 + 2 = ${2 + 2}`
//    └─left─┘ └─right─┘
//     text      2+2 → 4
//
//   Final string: "2 + 2 = " + "4"  →  "2 + 2 = 4"
//   The "2 + 2" on the left is just characters; the 2 + 2 inside ${} is real math.
console.log(`2 + 2 = ${2 + 2}`); // 2 + 2 = 4

// Multiline strings (another benefit of backticks):
let message = `Line 1
Line 2`;
console.log(message);

const env = "dev";
const userID = 5565;
const url = `https://${env}.example.com/users/${userID}`;
console.log(url);

const user = {
  name: "Vishwajit",
  age: 30,
  city: "Mumbai",
};

const userInfo = `Name: ${user.name}, Age: ${user.age}, City: ${user.city}`;
console.log(userInfo);

///Advance playwright locator  using template literal
const locator = `//input[@placeholder="${placeholder}"]`;
console.log(locator);

const rowIndex = 3;
const columnName = "email";
await page
  .locator(`//table[@id="usersTable"]/tbody/tr[${rowIndex}]/td[${columnName}]`)
  .fill(value);
