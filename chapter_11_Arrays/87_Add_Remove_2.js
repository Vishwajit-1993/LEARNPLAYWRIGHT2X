let arr = [10, 20, 30, 40, 50];
console.log(arr);

/* arr.push(60, 70, 80);
console.log(arr); */

//Splice>>remove elements from an aaray and return the new array from given index and given number of elements

/* arr.splice(2, 1);
console.log(arr);
//It will remove the element at index 2 and return the new array and it will remove only one element
//output will be [10, 20, 40, 50] */

arr.splice(2, 0, 100); //Acting as add
console.log(arr);
//It will add the element 100 at index 2 and return the new array and it will add only one element
//output will be [10, 20, 100, 30, 40, 50]

arr.splice(2, 0, 100, 200, 300);
console.log(arr); //Acting as add from index 2
//It will add the elements 100, 200, 300 at index 2 and return the new array and it will add three elements
//output will be [10, 20, 100, 200, 300, 30, 40, 50]

arr.splice(2, 1, 100, 200, 300); //Acting as remove and add from index 2
console.log(arr);
//It will remove the element at index 2 and add the elements 100, 200, 300 at index 2 and return the new array and it will remove one element and add three elements
//output will be [10, 20, 100, 200, 300, 40, 50]
