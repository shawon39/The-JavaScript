// Prototypal inheritance
// In programming, we often want to take something and extend it.

// For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

// Prototypal inheritance is a language feature that helps in that.

// (==>----------------------------------------<==)

// [[Prototype]]
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

// (==>----------------------------------------<==)

// One of them is to use the special name __proto__, like this:

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;

// __proto__ is a historical getter/setter for [[Prototype]]
// Please note that __proto__ is not the same as [[Prototype]]. That’s a getter/setter for it.

// If we look for a property in rabbit, and it’s missing, JavaScript automatically takes it from animal.

// (==>----------------------------------------<==)
// For instance: 

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true
// Here the line (*) sets animal to be a prototype of rabbit.


// (==>----------------------------------------<==)
// If we have a method in animal, it can be called on rabbit:
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// walk is taken from the prototype
rabbit.walk(); // Animal walk

// (==>----------------------------------------<==)
// The prototype chain can be longer:
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

// (==>----------------------------------------<==)

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

// (==>----------------------------------------<==)

let animal = {
    eats: true,
    walk() {
        /* this method won't be used by rabbit */
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk = function () {
    alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
//   From now on, rabbit.walk() call finds the method immediately in the object and executes it, without using the prototype:

// (==>----------------------------------------<==)

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)
// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.fullName); // Alice Cooper(*)

// Here in the line (*) the property admin.fullName has a getter in the prototype user, so it is called. And in the line (**) the property has a setter in the prototype, so it is called.

// (==>----------------------------------------<==)
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

// (==>----------------------------------------<==)

// for…in loop
// The for..in loop iterates over inherited properties too.

// For instance:

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats

// (==>----------------------------------------<==)

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
    } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
    }
}

// Note, there’s one funny thing. Where is the method rabbit.hasOwnProperty coming from? We did not define it. Looking at the chain we can see that the method is provided by Object.prototype.hasOwnProperty. In other words, it’s inherited.

// (==>----------------------------------------<==)

// Almost all other key/value-getting methods ignore inherited properties
// Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.