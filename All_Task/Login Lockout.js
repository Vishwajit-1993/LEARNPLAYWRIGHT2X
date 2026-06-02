// Login Lockout After Failed Attempts
/* Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

let attempts = 4;
let totalAttempts = 3;

console.log(`Input: attempts = ${attempts}`);

if (attempts < 0 || attempts > totalAttempts) {
  console.log(`Output: "Invalid Attempts"`);
} else if (attempts === totalAttempts) {
  console.log(`Output: "🔒 Account Locked — Contact support"`);
} else if (attempts === 0) {
  console.log(`Output: "Login successful"`);
} else {
  console.log(
    `Output: "${totalAttempts - attempts} attempt left before lockout"`,
  );
}
