// ============================================================
// IDENTIFIERS IN JAVASCRIPT
// ============================================================
// An Identifier is a NAME given to variables, functions,
// classes, or properties to uniquely identify them in code.
// ============================================================

// ------------------------------------------------------------
// RULES FOR NAMING IDENTIFIERS
// ------------------------------------------------------------

// 1. Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
let name = "John"; // valid
let _count = 10; // valid
let $price = 99.99; // valid
// let 1name = "X";       // invalid - cannot start with a digit
// let @value = 5;        // invalid - cannot start with a special character

// 2. Cannot start with a digit, but digits are allowed AFTER the first character
let user1 = "Alice"; // valid
let item2Count = 50; // valid
// let 1user = "Bob";     // invalid

// 3. Cannot contain spaces or special characters like @, #, %, &, !, -, +
let firstName = "John"; // valid
let total_amount = 500; // valid
// let first name = "X";  // invalid - contains space
// let total-amount = 5;  // invalid - contains hyphen

// 4. Cannot be a reserved keyword (let, class, return, function, etc.)
let className = "Math"; // valid
// let class = "Math";    // invalid - reserved keyword
// let return = 10;       // invalid - reserved keyword

// 5. Case-sensitive (uppercase and lowercase are treated differently)
let myVar = 1;
let MyVar = 2;
let MYVAR = 3;
let myvar = 4;
// All four above are DIFFERENT identifiers

// 6. No length limit, but keep names short and meaningful
let userName = "John"; // good
// let theNameOfTheUserWhoLoggedInToday = "John";  // too long

// 7. Unicode characters are allowed (letters from other languages)
let π = 3.14; // valid
let naïve = true; // valid

// 8. Should be meaningful and descriptive
let totalPrice = 100; // good - clear purpose
let userAge = 25; // good
// let x = 100;           // bad - not descriptive

// ------------------------------------------------------------
// NAMING CONVENTIONS (BEST PRACTICES)
// ------------------------------------------------------------

// camelCase -> for variables and functions
let firstNameValue = "John";
function calculateTotal() {}

// PascalCase -> for classes and constructors
class UserAccount {}
class ShoppingCart {}

// UPPER_SNAKE_CASE -> for constants
const MAX_LIMIT = 100;
const API_KEY = "abc123";

// _underscore prefix -> for private/internal use
let _internalCounter = 0;

// $ prefix -> often used in libraries (like jQuery)
let $element = "button";

// ------------------------------------------------------------
// QUICK EXAMPLES
// ------------------------------------------------------------

// Valid identifiers
let firstName2 = "John";
let _privateVar = 10;
let $btnElement = "submit";
let user123 = "Alice";
const MAX_USERS = 100;

// Invalid identifiers (commented out to avoid syntax errors)
// let 1user = "John";       // starts with digit
// let first-name = "John";  // contains hyphen
// let class = "Math";       // reserved keyword
// let user name = "John";   // contains space
