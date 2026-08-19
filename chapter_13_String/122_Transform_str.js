let str = " Login_Test_Pass_001 ";

console.log(str.toUpperCase()); //LOGIN_TEST_PASS_001
console.log(str.toLowerCase()); //login_test_pass_001
console.log(str.trim()); //Login_Test_Pass_001

console.log(str.trimStart()); //Login_Test_Pass_001
console.log(str.trimEnd()); // Login_Test_Pass_001

console.log(str.replace("Login", "Logout")); //Logout_Test_Pass_001
//replace(old, new) - replaces the old string with the new string

let msg = "Test:FAIL. Retry:FAIL.";

console.log(msg.replace("FAIL", "PASS")); //Test:PASS. Retry:PASS.>>Replace first occurence of FAIL with PASS
console.log(msg.replaceAll("FAIL", "PASS")); //Test:PASS. Retry:PASS.>>Replace all occurences of FAIL with PASS

console.log(msg.replace(/FAIL/g, "PASS")); //Test:PASS. Retry:PASS.>>Replace all occurences of FAIL with PASS

//concatenation of strings
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2); //HelloWorld
console.log(str1.concat(str2)); //HelloWorld
console.log(str1.concat(" ", str2)); //Hello World
console.log(str1.concat(" ", str2, "!")); //Hello World!
console.log(str1.concat(" ", str2, "!", str1)); //Hello World!Hello
console.log(str1.concat(" ", str2, "!", str1, str2)); //Hello World!HelloWorld
console.log(str1.concat(" ", str2, "!", str1, str2, str1)); //Hello World!HelloWorldHello
console.log(str1.concat(" ", str2, "!", str1, str2, str1, str2)); //Hello World!HelloWorldHelloWorld
console.log(str1.concat(" ", str2, "!", str1, str2, str1, str2, str1)); //Hello World!HelloWorldHelloWorldHello

let url = "https://www.google.com/search?q=javascript";
console.log(url.replace(/google/, "bing")); //https://www.bing.com/search?q=javascript

//split the string into an array
//split(separator) - splits the string into an array of substrings
let r = "Pass,Fail,Skip".split(",");
console.log(r); //["Pass", "Fail", "Skip"]

//join the array into a string
//join(separator) - joins the array into a string
let rr = "test_login_pass".split("_").join(" ");
console.log(rr); //test login pass

let dateParts = ["2026", "06", "13"];
let date = dateParts.join("-");
console.log(date); //2026-06-13
