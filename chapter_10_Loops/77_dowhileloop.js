// ============================================================
// while vs do-while
// ============================================================
// while     → checks condition FIRST  → may run 0 times
// do-while  → runs body FIRST         → runs at least 1 time
// ============================================================

let retry = 3;

// --- while loop ---
// Step 1: Check condition (retry < 3) → 3 < 3 is false
// Step 2: Body is SKIPPED — loop never runs
// Output: (nothing)
while (retry < 3) {
  console.log("while - Attempt " + retry);
  retry++;
}

// Reset for fair comparison (while loop did not change retry when condition is false at start)
retry = 3;

// --- do-while loop ---
// Step 1: Run body first → prints "Attempt 3", retry becomes 4
// Step 2: Check condition (retry < 3) → 4 < 3 is false → STOP
// Output: do-while - Attempt 3  (runs exactly once)
do {
  console.log("do-while - Attempt " + retry);
  retry++;
} while (retry < 3);

// --- Key difference with retry = 3 ---
// while     → 0 attempts (condition false before first run)
// do-while  → 1 attempt  (body runs once, then condition checked)
