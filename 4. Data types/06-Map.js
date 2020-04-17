// Objects for storing keyed collections.
// Arrays for storing ordered collections.
// But that’s not enough for real life. That’s why Map and Set also exist.

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

/* ------------ Map -------------- */

new Map() //– creates the map.
map.set(key, value) //– stores the value by the key.
map.get(key) //– returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) //– returns true if the key exists, false otherwise.
map.delete(key) //– removes the value by the key.
map.clear() //– removes everything from the map.
map.size //– returns the current element count.

// Example

let map = new Map();
map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.size); // 3
// As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

// map[key] isn’t the right way to use a Map though it works
// So we should use map methods: set, get and so on.

// Chaining
// Every map.set call returns the map itself, so we can “chain” the calls:
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

// Iteration over Map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

// Object.entries: Map from Object

let obj = {
    name: "John",
    age: 30
};
let map = new Map(Object.entries(obj));
alert(map.get('name')); // John

// Object.fromEntries: Object from Map
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// done!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2

// shorter way
let obj = Object.fromEntries(map); // omit .entries()


