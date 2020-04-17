/* 
A primitive Is a value of a primitive type.
There are 7 primitive types: 
string, 
number, 
bigint, 
boolean, 
symbol, 
null,
undefined.
*/

/*
An object Is capable of storing multiple values as properties.
One of the best things about objects is that we can store a function as one of its properties.
*/

let john = {
    name: "John",
    sayHi: function () {
        console.log("Hi buddy!");
    }
};
john.sayHi(); // Hi buddy!

// Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.

// Objects are “heavier” than primitives. They require additional resources to support the internal machinery.

// So primitives can provide methods, but they still remain lightweight.

alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);
if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

let num = Number("123"); // convert a string to number

// so using new it converted objects