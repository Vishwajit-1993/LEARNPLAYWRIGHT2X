// ============================================================
// Original version (commented for reference)
// ============================================================
// let testcaseresults = 1;
//
// console.log(`Input: ${testcaseresults}`);
//
// if (testcaseresults < 0 || testcaseresults > 100) {
//   console.log(`Output: "Invalid Test Case Results"`);
// } else if (testcaseresults === 100) {
//   console.log(`Output: " 🟢 Build is Healthy"`);
// } else if (testcaseresults >= 90) {
//   console.log(`Output: " 🟡 Build is Stable (Investigation Needed)"`);
// } else if (testcaseresults >= 70) {
//   console.log(`Output: " 🔴 Build is Unstable (Critical Issues)"`);
// } else {
//   console.log(`Output: " 🔴 Build is Broken (Critical Issues)"`);
// }

// ============================================================
// Optimized version — thresholds, function, single output
// ============================================================
// Pass rate % | Status
// 100         | Healthy
// 90–99       | Stable (investigation needed)
// 70–89       | Unstable
// 0–69        | Broken
// <0 or >100  | Invalid
// ============================================================

const THRESHOLDS = {
  MIN: 0,
  MAX: 100,
  HEALTHY: 100,
  STABLE: 90,
  UNSTABLE: 70,
};

let passRatePercent = 0;

function getBuildHealth(rate) {
  if (rate < THRESHOLDS.MIN || rate > THRESHOLDS.MAX) {
    return "Invalid Test Case Results";
  }
  if (rate === THRESHOLDS.HEALTHY) {
    return "🟢 Build is Healthy";
  }
  if (rate >= THRESHOLDS.STABLE) {
    return "🟡 Build is Stable (Investigation Needed)";
  }
  if (rate >= THRESHOLDS.UNSTABLE) {
    return "🔴 Build is Unstable (Critical Issues)";
  }
  return "🔴 Build is Broken (Critical Issues)";
}

console.log(`Input: ${passRatePercent}`);
console.log(`Output: ${getBuildHealth(passRatePercent)}`);
