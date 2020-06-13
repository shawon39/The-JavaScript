// Native prototypes
// The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

let obj = {};
alert( obj ); // "[object Object]" ?

// This is a empty object. where is toString, constructor and others build in objects?
// So all are inside the prototype 

// (==>----------------------------------------<==)


// Other built-in prototypes
// Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.
// Object.__proto__ is mother __proto__ of all __proto__ (Array.Date,Function etc)

let arr = [1, 2, 3];
// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true
// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true
// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null


// (==>----------------------------------------<==)

// By specification, all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”.
// Pictures: Native prototypes.PNG


// (==>----------------------------------------<==)

function f() {}

alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects


// (==>----------------------------------------<==)

// Primitives
// The most intricate thing happens with strings, numbers and booleans.
// Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.

// Values null and undefined have no object wrappers [KIR]


// (==>----------------------------------------<==)


// Changing native prototypes
// Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings:

String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!

// Reference: (Prototype structure) : https://javascript.info/native-prototypes


