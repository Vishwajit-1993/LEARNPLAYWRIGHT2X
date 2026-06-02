let impactScore = 6;

console.log(`Input Impact Score: ${impactScore}`);

if (impactScore < 1 || impactScore > 10) {
  console.log(`Output: "Invalid Impact Score"`);
} else if (impactScore >= 9) {
  console.log(`Output: "Severity: Critical"`);
} else if (impactScore >= 7) {
  console.log(`Output: "Severity: High"`);
} else if (impactScore >= 4) {
  console.log(`Output: "Severity: Medium"`);
} else if (impactScore >= 1) {
  console.log(`Output: "Severity: Low"`);
} else {
  console.log(`Output: "Invalid Impact Score"`);
}
