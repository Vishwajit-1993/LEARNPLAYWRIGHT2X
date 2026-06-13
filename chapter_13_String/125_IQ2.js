//String Anagram

let str1 = "boat";
let str2 = "boot";

if (
  str1.toLowerCase().replace(/[^a-z]/g, "").length !==
  str2.toLowerCase().replace(/[^a-z]/g, "").length
) {
  console.log("Not an Anagram , length mismatch");
} else {
  let arr1 = str1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();
  console.log(arr1);
  let arr2 = str2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort();
  console.log(arr2);
  if (arr1.join("") === arr2.join("")) {
    console.log("Anagram");
  } else {
    console.log("Not an Anagram");
  }
}
