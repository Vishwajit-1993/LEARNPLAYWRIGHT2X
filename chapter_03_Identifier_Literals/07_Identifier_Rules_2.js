// ============================================================
// VALID CASES TO DECLARE IDENTIFIERS IN JAVASCRIPT
// ============================================================
// JavaScript supports multiple naming conventions (cases) for
// declaring identifiers. Each case has its own use cases and
// is preferred in different scenarios.
// ============================================================

// ------------------------------------------------------------
// 1. camelCase
// ------------------------------------------------------------
// First word starts with lowercase, every subsequent word
// starts with uppercase. No spaces or underscores.
// USE FOR -> variables, functions, object properties, methods

let firstName = "John";
let lastName = "Doe";
let userAge = 25;
let totalPrice = 199.99;
let isLoggedIn = true;

function getUserDetails() {}
function calculateTotalAmount() {}

// ------------------------------------------------------------
// 2. PascalCase (UpperCamelCase)
// ------------------------------------------------------------
// Every word starts with uppercase, including the first word.
// USE FOR -> classes, constructors, components

class UserAccount {}
class ShoppingCart {}
class PaymentGateway {}

function PersonConstructor(name) {
  this.name = name;
}

// ------------------------------------------------------------
// 3. snake_case
// ------------------------------------------------------------
// All lowercase letters with words separated by underscores (_).
// USE FOR -> sometimes used for variables, file names, database fields

let first_name = "John";
let last_name = "Doe";
let user_age = 25;
let total_price = 199.99;
let is_logged_in = true;

// ------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
// ------------------------------------------------------------
// All uppercase letters with words separated by underscores (_).
// USE FOR -> constants, environment variables, config values

const MAX_LIMIT = 100;
const API_KEY = "abc123xyz";
const BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const PI_VALUE = 3.14159;

// ------------------------------------------------------------
// 5. kebab-case (NOT VALID in JS variables, but used in CSS/HTML)
// ------------------------------------------------------------
// Words separated by hyphens (-). Cannot be used as JS identifiers
// because '-' is treated as the minus operator.
// USE FOR -> CSS class names, HTML attributes, URL slugs, file names

// let first-name = "John";   // INVALID in JavaScript
// Used as: <div class="user-profile"></div>
// Used as: file-name.js

// ------------------------------------------------------------
// 6. _underscore prefix (Private convention)
// ------------------------------------------------------------
// Underscore at the start indicates "private" or internal use.
// USE FOR -> private variables, internal helper functions

let _internalCounter = 0;
let _privateData = "secret";

function _calculateInternally() {}

// ------------------------------------------------------------
// 7. $ prefix (Library / DOM convention)
// ------------------------------------------------------------
// Dollar sign prefix is often used in libraries like jQuery
// or to indicate DOM elements / observables.
// USE FOR -> DOM elements, jQuery objects, RxJS observables

let $button = "submitBtn";
let $userForm = "loginForm";
let $element = "container";

// ------------------------------------------------------------
// SUMMARY TABLE
// ------------------------------------------------------------
// | Case Style          | Example              | Used For              |
// |---------------------|----------------------|-----------------------|
// | camelCase           | firstName            | variables, functions  |
// | PascalCase          | UserAccount          | classes, constructors |
// | snake_case          | first_name           | DB fields, files      |
// | SCREAMING_SNAKE_CASE| MAX_LIMIT            | constants             |
// | kebab-case          | user-profile         | CSS, HTML (NOT JS)    |
// | _underscorePrefix   | _privateVar          | private members       |
// | $prefix             | $element             | DOM / library objects |
