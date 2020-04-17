// Losing “this”
// We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost.

// Here’s how it may happen with setTimeout:

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!

// The simplest solution is to use a wrapping function:

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function () {
    user.sayHi(); // Hello, John!
}, 1000);

// What if before setTimeout triggers (there’s one second delay!) user changes value? Then, suddenly, it will call the wrong object!

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(() => user.sayHi(), 1000);

// ...the value of user changes within 1 second
user = {
    sayHi() {
        alert("Another user in setTimeout!");
    }
};

// Another user in setTimeout!

// For instance, here funcUser passes a call to func with this=user:
// Bind

let user = {
    firstName: "John"
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

// All arguments are passed to the original func “as is”, for instance:

let user = {
    firstName: "John"
};

function func(phrase) {
    alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

// Now let’s try with an object method:


let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value
user = {
    sayHi() {
        alert("Another user in setTimeout!");
    }
};

// Another 

let user = {
    firstName: "John",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)


//   Convenience method: bindAll
// If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}

// Let’s use bind to create a function double on its base:
// Until now we have only been talking about binding this. Let’s take it a step further.
// We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10