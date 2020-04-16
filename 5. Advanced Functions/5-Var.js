// From the first sight, var behaves similar to let. That is, declares a variable:
function sayHi() {
    var phrase = "Hello";
    alert(phrase); // Hello
}
sayHi();
alert(phrase); // Error, phrase is not defined

// Variables, declared with var, are either function-wide or global. They are visible through blocks.

if (true) {
    var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if

// The same thing for loops: var cannot be block- or loop-local:

// var => (Function Scope) All declared variable go to top of the program.
name = "Shawon"
console.log(name); // Print Shawon
var name;

// Hoisting => Hoisting is a JavaScript mechanism where variables and function 
// 	    declarations are moved to the top of their scope before code execution. 
// 	    Inevitably, this means that no matter where functions and variables are 
// 	    declared, they are moved to the top of their scope regardless of whether 
// 	    their scope is global or local.

// Declarations are hoisted, but assignments are not.

function sayHi() {
    alert(phrase);
    var phrase = "Hello";
}
sayHi();

// So the code works essentially like this:

function sayHi() {
    var phrase; // declaration works at the start...
    alert(phrase); // undefined
    phrase = "Hello"; // ...assignment - when the execution reaches it.
}
sayHi();