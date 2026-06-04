/* let counter = 10;
while (counter < 5) {
  console.log(counter);
  counter++;
} */
//Nothing will be printed because the condition is false.

let n = 1;

// do-while runs body first → prints n
// n is NEVER incremented (no n++), so n stays 1 forever
// Condition (n < 3) → 1 < 3 is always true → INFINITE LOOP
// Output: 1, 1, 1, 1, ... (forever) — stop with Ctrl + C
do {
  console.log(n);
} while (n < 3);

// Fix: add n++ inside the loop to stop after 2 prints:
// do { console.log(n); n++; } while (n < 3);
// Output would be: 1, 2
