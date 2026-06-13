//searching and checking in a string

let url = "https://www.google.com/search?q=javascript";

console.log(url.includes("javascript")); //true
console.log(url.includes("typescript")); //false

console.log(url.startsWith("https")); //true
console.log(url.startsWith("http")); //false
console.log(url.endsWith("javascript")); //true

console.log(url.indexOf("g")); //12
console.log(url.indexOf("javascript")); //32 as it's first occurence of javascript is at index 32
console.log(url.lastIndexOf("g")); //15

console.log(url.indexOf("x")); //-1>>it will return -1 if the character is not found

console.log(url.search(/javascript/)); //32 as it's first occurence of javascript is at index 32

// indexOf vs search (2-line difference):
// indexOf → finds a literal substring (plain text); e.g. url.indexOf("javascript")
// search  → finds a regex pattern (e.g. digits, wildcards); e.g. url.search(/javascript/) or url.search(/\d+/)

// /regex/ - is a regular expression to search for the string javascript
// Used to search the pattern in the string
