// We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

// There are two methods for it:
// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// For instance, this code calls sayHi() after one second:
function sayHi() {
    alert('Hello');
}
setTimeout(sayHi, 1000);

// With arguments:
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

// If the first argument is a string, then JavaScript creates a function from it.
// So, this will also work:
setTimeout("alert('Hello')", 1000);

// But using strings is not recommended, use arrow functions instead of them, like this:
setTimeout(() => alert('Hello'), 1000);

// Pass a function, but don’t run it
// Novice developers sometimes make a mistake by adding brackets () after the function:
// wrong!
setTimeout(sayHi(), 1000);
// That doesn’t work, because setTimeout expects a reference to a function. 

// Canceling with clearTimeout

// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
// The syntax to cancel:

let timerId = setTimeout();
clearTimeout(timerId);

// In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId); // alert("never happens") will not call
alert(timerId); // same identifier (doesn't become null after canceling)