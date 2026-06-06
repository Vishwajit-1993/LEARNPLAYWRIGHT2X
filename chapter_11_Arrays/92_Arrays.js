let fruits = ["apple", "elderberry", "cherry", "date", "banana"];
fruits.sort();
console.log(fruits);

let numbers = [10, 55, 30, 20, 89, 25];
numbers.sort();
console.log(numbers);

// sort() without a compare function converts numbers to STRINGS first
// Then sorts alphabetically (lexicographic), not numerically
// "1" < "10" < "2" < "20"  (because "2" > "1" at first character, "10" starts with "1")
// Output: [1, 10, 2, 20]  — NOT [1, 2, 10, 20]
let nums = [1, 20, 2, 10];
nums.sort();
console.log(nums);
//This is called natural sorting or lexicographic sorting
// For numeric sort, pass a compare function:
// nums.sort((a, b) => a - b);  → [1, 2, 10, 20]

//****Ascending order**** */
// Numeric sort with compare function → ascending order
// sort() compares pairs (a, b) using: (a, b) => a - b
//   a - b < 0  → a comes BEFORE b  (a is smaller)
//   a - b > 0  → b comes BEFORE a  (b is smaller)
//   a - b = 0  → keep same order
// Example: compare 20 vs 2 → 20 - 2 = 18 (> 0) → 2 before 20
// Output: [1, 2, 10, 20]
let nums2 = [1, 20, 2, 10];
nums2.sort((a, b) => a - b);
console.log(nums2);

//****Descending order**** */

// Numeric sort with compare function → descending order
// sort() compares pairs (a, b) using: (a, b) => b - a
//   b - a < 0  → b comes BEFORE a  (b is smaller)
//   b - a > 0  → a comes BEFORE b  (a is smaller)
//   b - a = 0  → keep same order
// Example: compare 2 vs 20 → 20 - 2 = 18 (> 0) → 20 before 2
// Output: [20, 10, 2, 1]
let nums3 = [1, 20, 2, 10];
nums3.sort((a, b) => b - a);
console.log(nums3);
