if ("Hello") console.log("String is truthy"); //Output: String is truthy
if (0) console.log("0 is truthy"); //Output: It will not print anything as 0 is considered as false
if (1) console.log("1 is truthy"); //Output: 1 is truthy
if (null) console.log("null is truthy"); //Output: It will not print anything as null is considered as false
if (undefined) console.log("undefined is truthy"); //Output: It will not print anything as undefined is considered as false
if (NaN) console.log("NaN is truthy"); //Output:It will not print anything as NaN is considered as false
if (false) console.log("false is truthy"); //Output: It will not print anything as false is considered as false
if (true) console.log("true is truthy"); //Output: true is truthy
if ([]) console.log("[] is truthy"); //Output: [] is truthy
if ({}) console.log("{} is truthy"); //Output: {} is truthy
if (function () {}) console.log("function () {} is truthy"); //Output: function () {} is truthy
if (Symbol()) console.log("Symbol() is truthy"); //Output: Symbol() is truthy
if ("") console.log("Empty string is truthy"); //Output: It will not print anything as empty string is considered as false
