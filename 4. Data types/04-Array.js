// There are two syntaxes for creating an empty array:
// An array is a special kind of object.

let arr = new Array();
let arr = []; // Generally we use it

let fruits = ["Apple", "Orange", "Plum"];
fruits.length

// An array can store elements of any type.
// function and object also

// mix of values
let arr = ['Apple', {
    name: 'John'
}, true, function () {
    alert('hello');
}];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// Array method
// pop/push, shift/unshift ( ****** )

// Methods push and unshift can add multiple elements at once:
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// Performance
// Methods push/pop run fast, while shift/unshift are slow.

// The shift operation must do 3 things:

// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.

// The push,pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.

let fruits = ["Apple", "Orange", "Plum"];

// Way - 1
for (let i = 0; i < arr.length; i++) { // Good and old one
    alert(arr[i]);
}
// Way - 2
for (let fruit of fruits) { // Good and new one
    alert(fruit);
}
// way - 3
for (let key in arr) { // Bad one for array but optimize for array
    alert(arr[key]); // shouldn’t use for..in for arrays
}

// A word about “length”

let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

// Increase manually but manually length setting is a problem.

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return


// It's better and easier to use Square bracket array

let arr = new Array(2); // will it create an array of [2] ?
alert( arr[0] ); // undefined! no elements.
alert( arr.length ); // length 2


// Array Converted to string
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true