// Spread syntax

console.log(Math.max(3, 5, 1)); // 5

let arr = [3, 5, 1];
console.log(Math.max(arr)); // NaN - doesn't Support


// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

let arrM = [3, 5, 1];
console.log(Math.max(...arrM));

// Also works
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// We can even combine the spread syntax with normal values:

let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

console.log(Math.max(1, ...arr3, 2, ...arr4, 25)); // 25

// Also, the spread syntax can be used to merge arrays:

let arr11 = [3, 5, 1];
let arr12 = [8, 9, 15];

let merged = [0, ...arr11, 2, ...arr12];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";
console.log( [...str] ); // H,e,l,l,o

// Array.from converts an iterable into an array
console.log( Array.from(str) ); // H,e,l,l,o

// Get a new copy of an object/array
// Remember when we talked about Object.assign() in the past?

// It is possible to do the same thing with the spread operator!

let arr20 = [1, 2, 3];
let arrCopy = [...arr20]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr20) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr20 === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3


// Note that it is possible to do the same thing to make a copy of an object:

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// This way of copying an object is much shorter than let objCopy = Object.assign({}, obj); or for an array let arrCopy = Object.assign([], arr); so we prefer to use it whenever we can.



// Summary
// When we see "..." in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
// Use patterns:

// Rest parameters are used to create functions that accept any number of arguments.
// The spread syntax is used to pass an array to functions that normally require a list of many arguments.
// Together they help to travel between a list and an array of parameters with ease.

// All arguments of a function call are also available in “old-style” arguments: array-like iterable object.