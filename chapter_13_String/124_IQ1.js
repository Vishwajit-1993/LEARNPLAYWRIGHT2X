//palindrome string

let str = "madam";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  {
    reverseStr = reverseStr + str[i];
  }
}
console.log(reverseStr);

if (str === reverseStr) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
