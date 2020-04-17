// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Array destructuring
let arr = ["SH", "Shawon"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // SH
alert(surname); // Shawon

// It looks great when combined with split or other array-returning methods:
let [firstName, surname] = "SH Shawon".split(' ');

// Ignore elements using commas
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(title); // Consul

// Set
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// For instance, an object property:
let user = {};
[user.name, user.surname] = "SH Shawon".split(' ');
alert(user.surname); // Shawon


// Looping with .entries()

// Objects
let user = {
    name: "John",
    age: 30
};
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}

// Map
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
}

//  The rest ‘…’

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


// Object destructuring

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {
    title,
    width,
    height
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200

// changed the order in let {...}
// The order does not matter. This works too:
let {
    height,
    width,
    title
} = {
    title: "Menu",
    height: 200,
    width: 100
}

// This is also works.
// { sourceProperty: targetVariable }
let {
    width: w,
    height: h,
    title
} = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200

// 
let title, width, height;
// okay now
({
    title,
    width,
    height
} = {
    title: "Menu",
    width: 200,
    height: 100
});
alert(title); // Menu


// Nested destructuring

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
    size: { // put size here
        width,
        height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut


// 2875 - wifi-89- 412 - 270 = 