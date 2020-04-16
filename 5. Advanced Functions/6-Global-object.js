// All properties of the global object can be accessed directly:

alert("Hello");
// is the same as
window.alert("Hello");

var gVar = 5;
alert(window.gVar); // 5 (became a property of the global object)


// If we used let instead, such thing wouldn’t happen:
let gLet = 5;
alert(window.gLet); // undefined (doesn't become a property of the global object)

// If a value is so important that you’d like to make it available globally, write it directly as a property:

// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John


// Using for polyfills
// We use the global object to test for support of modern language features.

// For instance, test if a built-in Promise object exists (it doesn’t in really old browsers):

if (!window.Promise) {
  alert("Your browser is really old!");
}

// If there’s none (say, we’re in an old browser), we can create “polyfills”: add functions that are not supported by the environment, but exist in the modern standard.

if (!window.Promise) {
  // window.Promise = ...  // custom implementation of the modern language feature
}