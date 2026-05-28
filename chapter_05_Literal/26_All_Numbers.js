// ============================================================
// All Numbers Supported in JavaScript
// ============================================================
// JavaScript has two numeric types:
//   1. Number  — IEEE 754 double-precision (integers + decimals)
//   2. BigInt  — arbitrary-precision integers (ES2020+)
// typeof for both Number and BigInt literals is "number" / "bigint"
// ============================================================

// NOTE: What is "base"?
// Base (radix) = how many unique digits a number system uses before the next place value.
//   base 10 (decimal)  → digits 0–9        (everyday counting)
//   base  2 (binary)   → digits 0–1        (prefix 0b)
//   base  8 (octal)    → digits 0–7        (prefix 0o)
//   base 16 (hex)      → digits 0–9, A–F   (prefix 0x)
// Each position is a power of the base. Example in base 10: 42 = (4 × 10¹) + (2 × 10⁰)
// JavaScript stores the value as a Number; the prefix only changes how you WRITE the literal.

// --- 1. Decimal (base 10) integers ---
// Default when no prefix — uses digits 0 through 9 only
let decimal = 42; // 42 is a decimal integer literal
let zero = 0;
let negative = -100;

// --- 2. Binary (base 2) — prefix 0b or 0B ---
// Only 0 and 1; each place is a power of 2
let binary = 0b1010; // 10 in decimal → (1×2³) + (0×2²) + (1×2¹) + (0×2⁰)

// --- 3. Octal (base 8) — prefix 0o or 0O ---
// Digits 0–7; each place is a power of 8
let octal = 0o52; // 42 in decimal → (5×8¹) + (2×8⁰)

// --- 4. Hexadecimal (base 16) — prefix 0x or 0X ---
// Digits 0–9 and A–F (a–f); each place is a power of 16. Here 0xff = (15×16¹) + (15×16⁰) = 255
let hex = 0xff; // 255 in decimal

// --- 5. Floating-point (decimal) literals ---
let pi = 3.14;
let half = 0.5;
let leadingDot = .25; // same as 0.25
let trailingDot = 10.; // same as 10

// --- 6. Scientific / exponential notation ---
let million = 1e6; // 1 * 10^6 = 1000000
let small = 5e-3; // 5 * 10^-3 = 0.005
let avogadro = 6.02e23;

// --- 7. BigInt — suffix n (for integers larger than Number.MAX_SAFE_INTEGER) ---
let big = 9007199254740991n; // 2^53 - 1
let bigHex = 0xffn;
let bigBinary = 0b1111n;

// --- 8. Special numeric values (still type Number) ---
let positiveInfinity = Infinity; // result of 1 / 0
let negativeInfinity = -Infinity; // result of -1 / 0
let notANumber = NaN; // result of invalid math, e.g. 0 / 0 or "abc" * 2

// --- typeof checks ---
console.log("--- typeof ---");
console.log(typeof decimal); // "number"
console.log(typeof big); // "bigint"
console.log(typeof NaN); // "number" (NaN is still type Number)

// --- Sample values ---
console.log("\n--- values ---");
console.log("decimal:", decimal);
console.log("binary 0b1010:", binary);
console.log("octal 0o52:", octal);
console.log("hex 0xff:", hex);
console.log("pi:", pi);
console.log("1e6:", million);
console.log("5e-3:", small);
console.log("BigInt:", big);
console.log("Infinity:", positiveInfinity);
console.log("NaN:", notANumber);

// --- Useful Number constants ---
console.log("\n--- Number constants ---");
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("MAX_VALUE:", Number.MAX_VALUE); // largest finite Number
console.log("MIN_VALUE:", Number.MIN_VALUE); // smallest positive Number (not most negative)

// --- Useful checks ---
console.log("\n--- checks ---");
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isInteger(3.14):", Number.isInteger(3.14)); // false
console.log("Number.isNaN(NaN):", Number.isNaN(notANumber)); // true
console.log("Number.isFinite(100):", Number.isFinite(100)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(positiveInfinity)); // false
