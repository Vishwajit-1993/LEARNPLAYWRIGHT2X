let browser = ["chrome", "firefox", "safari", "edge"];

let score = new Array(10);
console.log(score);
console.log(score.length);
//This will create an empty array

let score2 = new Array(1, 2, 3, 4, 5);
console.log(score2);
//This will create an array with the values 1, 2, 3, 4, 5

//Arrays are stored in contiguous memory locations.

//another way to creae an array using array of
let fruits = Array.of("apple", "banana", "cherry", "date", "elderberry");
console.log(fruits);
//This will create an array with the values apple, banana, cherry, date, elderberry

//another way to creae an array using array from
//create an array from array like object . example : string , set , map , etc.

let str = Array.from("Hello My Name is Vishwajit");
console.log(str);
