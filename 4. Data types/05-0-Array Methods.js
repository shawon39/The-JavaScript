// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.


// splice

let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert(arr) // now ["Let's", "dance", "right", "now"]


// *** Here we can see that splice returns the array of removed elements:
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);
alert(removed); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
arr.splice(2, 0, "complex", "language");

// Negative indexes allowed

let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert(arr); // 1,2,3,4,5


// slice

// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)


// concat

let arr = [1, 2];
// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6


// Iterate: forEach

arr.forEach(function (item, index, array) {
    // ... do something with item
});

["Bilbo", "Gandalf", "Great"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


// indexOf 
// lastIndexOf  ( arr.lastIndexOf(item, from) – same, but looks for from right to left.)
// includes

// *** Note that the methods use === comparison

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

// find and findIndex

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

// The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.

// filter

let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2



// map

let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Summer"].map(item => item.length);
alert(lengths); // 5,7,6

// sort(fn)

let arr = [ 1, 2, 15 ];
// the method reorders the content of arr
arr.sort();
alert( arr );  // 1, 15, 2
// The items are sorted as strings by default.
// For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.


let arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });
alert(arr);  // 1, 2, 15

// Best way by using Arrow function
arr.sort( (a, b) => a - b ); 



// reverse

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1

// split and join

let names = 'Bilbo, Gandalf, lolAnd';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let str = "test";
alert( str.split('') ); // t,e,s,t

let arr = ['Bilbo', 'Gandalf', 'lolAnd'];
let str = arr.join(';'); // glue the array into a string using ;
alert( str ); // Bilbo;Gandalf;lolAnd

// reduce

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15