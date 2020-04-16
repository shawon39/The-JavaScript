// JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created dynamically, passed as an argument to another function and called from a totally different place of code later.
// We already know that a function can access variables outside of it.

// If a variable is declared inside a code block {...}, it’s only visible inside that block.
{
    // do some job with local variables that should not be seen outside
    let message = "Hello"; // only visible in this block
    alert(message); // Hello
}
alert(message); // Error: message is not defined

// For if, for, while and so on, variables declared in {...} are also only visible inside:

// Nested functions
function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }
    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
}

// Below, makeCounter creates the “counter” function that returns the next number on each invocation:
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2

// Step 1. Variables *****

// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

// The Lexical Environment object consists of two parts:

// Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
// A reference to the outer lexical environment, the one associated with the outer code.

// A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”.

// ---------------------

// 1. Execution starts
// 2. Let Phrase;
// 3. Phrase = "Hello"
// 4. Phrase = "Bye"

// When the script starts, the Lexical Environment is pre-populated with all declared variables.
// Initially, they are in the “Uninitialized” state. That’s a special internal state, it means that the engine knows about the variable, but it cannot be referenced until it has been declared with let. It’s almost the same as if the variable didn’t exist.
// Then let phrase definition appears. There’s no assignment yet, so its value is undefined. We can use the variable since this moment.
// phrase is assigned a value.
// phrase changes the value.


// Step 2. Function Declarations *****

// A function is also a value, like a variable.
// The difference is that a Function Declaration is instantly fully initialized.
// When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration).
// That’s why we can use a function, declared as Function Declaration, even before the declaration itself.
// That's why it works

hello();

function hello() {
    console.log('Hello World');
}


// Step 3. Inner and outer Lexical Environment *****

// When a function runs, at the beginning of the call, a new Lexical Environment is created automatically to store local variables and parameters of the call.

let name = "Shawon";

function lol(Hi) {
    console.log(Hi + ' ' + name);
}
lol('Hi');
// in the function local/inner is Hi and it's outer is name, lol function

// ****** When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.


// Step 4. Returning a function *****

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
// A variable is updated in the Lexical Environment where it lives.
// If we call counter() multiple times, the count variable will be increased to 2, 3 and so on, at the same place.


// closure => 
//A closure is a function that remembers its outer variables and can access them. Inner function can access outer function's variable ( Can Access all Ancestor ) in JavaScript, all functions are naturally closures 


// Garbage collection

// A Lexical Environment object dies when it becomes unreachable

function f() {
    let value = 123;

    return function () {
        alert(value);
    }
}
let g = f(); // while g function exists, the value stays in memory
g = null; // ...and now the memory is cleaned up


