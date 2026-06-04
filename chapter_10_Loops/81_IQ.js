// ============================================================
// for loop + continue
// ============================================================
// continue → skip the REST of the current iteration and go to the next loop step
// i runs: 0, 1, 2, 3, 4 (stops when i < 5 is false)
// Output: 0, 2, 3, 4  (1 is skipped because of continue)
// ============================================================

for (let i = 0; i < 5; i++) {
  // When i is 1, skip console.log below and jump to i++ (next iteration)
  if (i === 1) continue;

  console.log(i);
}

// i is NOT accessible here — let i exists only inside the for loop (block scope)
// Uncommenting below would cause ReferenceError: i is not defined
// console.log("i is now: " + i);
