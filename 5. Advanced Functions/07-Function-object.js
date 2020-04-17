// As we already know, a function in JavaScript is a value.
// Every value in JavaScript has a type. What type is a function?
// In JavaScript, functions are objects.
// A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.

function sayHi() {
    alert("Hi");
}
// A function’s name is accessible as the “name” property:
console.log(sayHi.name); // sayHi

let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// The “length” property
// There is another built-in property “length” that returns the number of function parameters, for instance:

function f1(a) {}

function f2(a, b) {}

function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2
// Here we can see that rest parameters are not counted.


// Custom properties
// We can also add properties of our own.

// Here we add the counter property to track the total calls count:


function sayHi() {
    alert("Hi");

    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times


// There are two special things about the name func, that are the reasons for it:

// It allows the function to reference itself internally.
// It is not visible outside of the function.
// For instance, the function sayHi below calls itself again with "Guest" if no who is provided:


let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};
sayHi(); // Hello, Guest
// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

