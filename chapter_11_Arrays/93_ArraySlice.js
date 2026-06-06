let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let slicedNumbers = numbers.slice(2, 5); //while slice it will take index as start and end-1 index
console.log(slicedNumbers);
// output: [3, 4, 5]

let slicedNumbers2 = numbers.slice(2); //while slice it will take index as start and till end of array
console.log(slicedNumbers2);
// output: [3, 4, 5, 6, 7, 8, 9, 10]

//array let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//index in reverse    [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]
let slicedNumbers3 = numbers.slice(-5); //while slice it will take index from last and second last element
// output: [6, 7, 8, 9, 10]
console.log(slicedNumbers3);

let slicedNumbers4 = numbers.slice(0);
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//This will return the entire array
console.log(slicedNumbers4);

let slicedNumbers5 = numbers.slice(-5, -2);
console.log(slicedNumbers5);
// output: [6, 7, 8]
//This will return the elements from index -5 to -2
