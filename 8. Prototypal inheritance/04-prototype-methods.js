// The __proto__ is considered outdated
// The modern methods are:

// Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.


// These should be used instead of __proto__.

let animal = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

console.log(rabbit.eats); // undefined


// (==>----------------------------------------<==)

// Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:

let animal2 = {
  eats: true
};
let rabbit2 = Object.create(animal2, {
  jumps: {
    value: true
  }
});
console.log(rabbit2.jumps); // true

// (==>----------------------------------------<==)

// We can use Object.create to perform an object cloning more powerful than copying properties in for..in:

// Copy a Object
let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
console.log(clone);

// This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].


// (==>----------------------------------------<==)

// We also made it clear that __proto__ is a getter/setter for [[Prototype]] and resides in Object.prototype, just like other methods.

// We can create an object without a prototype by Object.create(null). Such objects are used as “pure dictionaries”, they have no issues with "__proto__" as the key.

let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"


// (==>----------------------------------------<==)

// Other methods:

// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of enumerable own string property names/values/key-value pairs.
// Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic keys.
// Object.getOwnPropertyNames(obj) – returns an array of all own string keys.
// Reflect.ownKeys(obj) – returns an array of all own keys.
// obj.hasOwnProperty(key): returns true if obj has its own (not inherited) key named key.