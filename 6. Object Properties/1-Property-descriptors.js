// Property flags and descriptors
// As we know, objects can store properties.

// Until now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.

// In this chapter we’ll study additional configuration options, and in the next we’ll see how to invisibly turn them into getter/setter functions.

// Property flags
// Object properties, besides a value, have three special attributes (so-called “flags”):

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

// (==>----------------------------------------<==)

let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

// (==>----------------------------------------<==)

// If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

// For instance, here a property name is created with all falsy flags:

let user = {};

Object.defineProperty(user, "name", {
    value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// (==>----------------------------------------<==)

//  Non-writable

let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// ( !!! ***** !!! )

// Errors appear only in strict mode 

// (==>----------------------------------------<==)

// Non-enumerable

let user = {
    name: "John",
    toString() {
        return this.name;
    }
};

Object.defineProperty(user, "toString", {
    enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name

// (==>----------------------------------------<==)

// Non-configurable

let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", { value: "Pete" })
Object.defineProperty(user, "name", {
    writable: true
}); // Error

// “Non-configurable” doesn’t mean “non-writable”
// Notable exception: a value of non-configurable, but writable property can be changed.

// The idea of configurable: false is to prevent changes to property flags and its deletion, not changes to its value.

// (==>----------------------------------------<==)

// Object.defineProperties

// There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

// For instance:

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});


// ( !!! ***** !!! )


// Reference: https://javascript.info/property-descriptors