// The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.
// In other words, new User(...) does something like:

function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}
//   So let user = new User("Jack") gives the same result as:

let user = {
    name: "Jack",
    isAdmin: false
};

// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

// That’s the main purpose of constructors – to implement reusable object creation code.

// Let’s note once again – technically, any function can be used as a constructor. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.


// new function() { … }
// If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, like this:

let user = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
};

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

function BigUser() {
    this.name = "John";
    return {
        name: "Godzilla"
    }; // <-- returns this object
}
alert(new BigUser().name); // Godzilla, got that object

// Omitting parentheses
let user = new User; // <-- no parentheses - works
let user = new User();


// Methods in constructor

function User(name) {
    this.name = name;
    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
}

let john = new User("John");
john.sayHi(); // My name is: John