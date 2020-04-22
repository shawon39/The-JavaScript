// In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

let user = new User("John");
user.sayHi();

// When new User("John") is called:

// A new object is created.
// The constructor runs with the given argument and assigns this.name to it.

// ---------------------------------------------
// ---------------------------------------------

// In JavaScript, a class is a kind of function.

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // alert(this.name);

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// ---------------------------------------------
// ---------------------------------------------

// Not just a syntactic sugar
// Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same without class keyword at all:

// Still, there are important differences.
// A class definition sets enumerable flag to false for all methods in the "prototype".
// All code inside the class construct is automatically in strict mode.

class User {
    constructor() { }
}
alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'

// ---------------------------------------------
// ---------------------------------------------

// Class Expression
// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

let User = class {
    sayHi() {
        alert("Hello");
    }
};

// Similar to Named Function Expressions, class expressions may have a name.

let User = class MyClass {
    sayHi() {
        alert(MyClass);
    }
};
new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass name isn't visible outside of the class

// ---------------------------------------------
// ---------------------------------------------

// We can even make classes dynamically “on - demand”, like this:

function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}

// Create a new class
let User = makeClass("Hello");
new User().sayHi(); // Hello

// ---------------------------------------------
// ---------------------------------------------

// Getters/setters, other shorthands
class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
alert(user.name); // John
user = new User(""); // Name is too short.

// ---------------------------------------------
// ---------------------------------------------

// The class declaration creates getters and setters in User.prototype, like this:
class User {
    constructor(name) {
        this.name = name;
    }
}
Object.defineProperties(User.prototype, {
    name: {
        get() {
            return this._name
        },
        set(name) {
            // ...
        }
    }
});

// ---------------------------------------------
// ---------------------------------------------

// using bind as if we don't lose this
class Button {
    constructor(value) {
        this.value = value;
        this.click = this.click.bind(this);
    }
    click() {
        alert(this.value);
    }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // hello

// Using Arrow function
class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // hello