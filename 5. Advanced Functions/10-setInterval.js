// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 5000);

// There are two ways of running something regularly.
// One is setInterval. The other one is a nested setTimeout, like this:

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

// The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.

// For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

// Here’s the pseudocode:

let delay = 5000;

let timerId = setTimeout(function request() {
    //...send request...

    if ( /*request failed due to server overload*/ ) {
        // increase the interval to the next run
        delay *= 2;
    }

    timerId = setTimeout(request, delay);

}, delay);

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

// Let’s compare two code fragments. The first one uses setInterval:

let i = 1;
setInterval(function () {
    func(i++);
}, 100);
// The second one uses nested setTimeout:

let i = 1;
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);

// Did you notice?

// The real delay between func calls for setInterval is less than in the code!

// That’s normal, because the time taken by func's execution “consumes” a part of the interval.

// It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.

// In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.

// In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

// The nested setTimeout guarantees the fixed delay (here 100ms).

// That’s because a new call is planned at the end of the previous one.


// Zero delay setTimeout --------------------------

// There’s a special use case: setTimeout(func, 0), or just setTimeout(func).

// This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.

// So the function is scheduled to run “right after” the current script.

// For instance, this outputs “Hello”, then immediately “World”:

// setTimeout(() => alert("World"));

// alert("Hello");
// The first line “puts the call into calendar after 0ms”. But the scheduler will only “check the calendar” after the current script is complete, so "Hello" is first, and "World" – after it.