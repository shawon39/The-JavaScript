/* Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on. */

/* The Sources panel has 3 parts:

1. The File Navigator pane lists HTML, JavaScript, CSS and other files
2. The Code Editor pane shows the source code.
3. The JavaScript Debugging pane is for debugging, we’ll explore it soon. */

/*

1. Watch – shows current values for any expressions.

You can click the plus + and input an expression. The debugger will show its value at any moment, automatically recalculating it in the process of execution.

2. Call Stack – shows the nested calls chain.

At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”).

If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well.

3. Scope – current variables.

Local shows local function variables. You can also see their values highlighted right over the source.

Global has global variables (out of any functions).

There’s also this keyword there that we didn’t study yet, but we’ll do that soon.

*/

/*

********** Use Incognito Window for debugging. Normal Window causes error because of chrome extensions.  ***********
Time to change from Console.log() -> to Debugging

*/