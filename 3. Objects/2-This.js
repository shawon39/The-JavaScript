// To access the object, a method can use the this keyword
let user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name); // Without this it can't access
        console.log(user.name); // it’s also possible to access the object without this, by referencing it via the outer variable: …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.
    }
};
user.sayHi(); // John


// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.

// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

let user = {
    firstName: "Ilya",
    sayHi() {
        let sayBye = () => {
            console.log(this.firstName);
        }
        sayBye();
    }
};

user.sayHi(); // Ilya