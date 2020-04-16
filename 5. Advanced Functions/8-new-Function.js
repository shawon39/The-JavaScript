// There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
let func = new Function([arg1, arg2, ...argN], functionBody);


let sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3


// And here there’s a function without arguments, with only the function body:
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

// such function doesn’t have access to outer variables, only to the global ones.
function getFunc() {
    let value = "test";
    let func = new Function('alert(value)');
    return func;
}
getFunc()(); // error: value is not defined

// Compare it with the regular behavior:

function getFunc() {
    let value = "test";

    let func = function () {
        alert(value);
    };

    return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc