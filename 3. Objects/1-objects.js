// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

// We can immediately put some properties into {...} as “key: value” pairs:

let user = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};
user.isAdmin = true;
console.log(user); //  { name: 'John', age: 30, isAdmin: true }
// To remove a property, we can use delete operator:
delete user.age;
console.log(user); // {name: 'John', isAdmin: true }

// multi-word property name must be quoted
let user = {
    name: "John",
    age: 30,
    "likes birds": true // multi-word property name must be quoted
};

// For multi-word properties, the dot access doesn’t work:
// Alternative of dot
let user = {};
// set
user["likes birds"] = true;
// get
console.log(user["likes birds"]); // true
// delete
delete user["likes birds"];

// Computed properties
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert(bag.apple); // 5 if fruit="apple"

// Property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);
alert(user.name); // John

// Reserved words are allowed as property names.

// There also exists a special operator "in" to check for the existence of a property.
let user = {
    name: "John",
    age: 30
};
alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist'


// The “for…in” loop
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    // keys
    alert(key); // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
}

// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it. Here, the object is stored somewhere in memory. And the variable user has a “reference” to it.

// *** Object keeps the only reference of the variable. Variable store somewhere in the memory


// Two objects are equal only if they are the same object.
let a = {};
let b = a; // copy the reference
alert(a == b); // true, both variables reference the same object
alert(a === b); // true

let a = {};
let b = {}; // two independent objects
alert(a == b); // false

// Const object
// An object declared as const can be changed.

const user = {
    name: "John"
};

user.name = "Hello";
alert(user.name); // Hello

// But this will occur errors
const user = {
    name: "John"
};
user = {
    name: "Pete"
};

// Independent Object

let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object

// Also we can use the method Object.assign for that.

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }


// If the receiving object (user) already has the same named property, it will be overwritten:

let user = { name: "John" };
// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });
// now user = { name: "Pete", isAdmin: true }


// Reference : https://javascript.info/object