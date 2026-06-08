//IIFE - Immediately Invoked Function Expression
//A function that runs immediately after it is defined
(function () {
  console.log("IIFE runs once immediately");
})();

//output: IIFE runs once immediately

//Arrow Function as an IIFE
(() => {
  console.log("Arrow Function as an IIFE");
})();

//output: Arrow Function as an IIFE

//this is not reusable function should not have a name
