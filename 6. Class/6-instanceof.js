// The instanceof operator allows to check whether an object belongs to a certain class.

class Rabbit {}
let rabbit = new Rabbit();

console.log( rabbit instanceof Rabbit ); // true

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// It also works with constructor functions:

function Rabbit() {}

console.log( new Rabbit() instanceof Rabbit ); // true

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// …And with built-in classes like Array:

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

// Please note that arr also belongs to the Object class. That’s because Array prototypically inherits from Object.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// That can lead to interesting consequences when a prototype property is changed after the object is created.

function Rabbit() {}
let rabbit = new Rabbit();

console.log( rabbit instanceof Rabbit ); // false

// changed the prototype
Rabbit.prototype = {};

// ...not a rabbit any more!
console.log( rabbit instanceof Rabbit ); // false


