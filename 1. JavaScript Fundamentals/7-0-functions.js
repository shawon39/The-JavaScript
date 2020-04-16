// Prime Number

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
showPrimes(10);


// There is another syntax for creating a function that is called a Function Expression. ( Anonymous Function) A Function Expression is created when the execution reaches it and is usable only from that moment.

// The syntax that we used before is called a Function Declaration: ( Named Function ) A Function Declaration can be called earlier than it is defined.


// In JavaScript, a function is a value, so we can deal with it as a value

/*

Summary
-------------
1. Functions are values. They can be assigned, copied or declared in any place of the code.

2. If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

3. If the function is created as a part of an expression, it’s called a “Function Expression”.
4. Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
5. Function Expressions are created when the execution flow reaches them.

In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future. 

*/