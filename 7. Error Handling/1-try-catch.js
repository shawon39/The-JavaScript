// Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
// So here try catch comes to rescue us.
try {
  // code...
} catch (err) {
  // error handling
}

// try..catch only works for runtime errors

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*----- try..catch works synchronously --------*/

// If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it:

try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  console.log("won't work");
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- Error object --------*/
// There are two main property of errors
// name, message, (stack  (non-standard properties) )

try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- Optional “catch” binding --------*/

// If we don’t need error details, catch may omit it:

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- Using “try…catch” --------*/

let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- when an error occurs...
  console.log(user.name); // doesn't work
} catch (e) {
  // ...the execution jumps here
  console.log(
    "Our apologies, the data has errors, we'll try to request it one more time."
  );
  console.log(e.name);
  console.log(e.message);
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- Throwing our own errors --------*/

let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- try…catch…finally --------*/

try {
  //... try to execute the code ...
} catch (e) {
  //... handle errors ...
} finally {
  //... execute always ...
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

/*-------- Global catch --------*/

// Let’s imagine we’ve got a fatal error outside of try..catch, and the script died. Like a programming error or some other terrible thing.

// Then Global catch comes.
