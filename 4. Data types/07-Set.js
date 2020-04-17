/* ------------ Set -------------- */

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.(Store unique value)

// Its main methods are:

new Set(iterable) //– creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) //– adds a value, returns the set itself.
set.delete(value) //– removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) //– returns true if the value exists in the set, otherwise false.
set.clear() //– removes everything from the set.
set.size //– is the elements count.

// Example

let set = new Set();
let john = {
    name: "John"
};
let pete = {
    name: "Pete"
};
let mary = {
    name: "Mary"
};
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log(set.size); // 3
for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
}

// Iteration over Set
// We can loop over a set either with for..of or using forEach:

let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
// the same with forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

set.keys() //– returns an iterable object for values,
set.values() //– same as set.keys(), for compatibility with Map,
set.entries() //– returns an iterable object for entries [value, value], exists for compatibility with Map.

let recipeMap = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

recipeMap.add(john);
recipeMap.add(mary);
recipeMap.add(john);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}