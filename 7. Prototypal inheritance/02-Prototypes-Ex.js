// Remember, new objects can be created with a constructor function, like new F().

// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

// JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.

// But in the old times, there was no direct access to it. The only thing that worked reliably was a "prototype" property of the constructor function, described in this chapter. So there are many scripts that still use it.

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert(rabbit.eats); // true

// (==>----------------------------------------<==)

// Default F.prototype, constructor property
// Every function has the "prototype" property even if we don’t supply it.

// The default "prototype" is an object with the only property constructor that points back to the function itself.

// Like this:

function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true


// Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)


// function Rabbit() {}
// let rabbit = new Rabbit(); 
// alert( Rabbit.prototype.constructor == Rabbit ); // true

function Rabbit() {}
let rabbit = new Rabbit(); 
alert( Rabbit.prototype.constructor == Rabbit ); // true