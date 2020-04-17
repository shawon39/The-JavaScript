function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6


// We can choose to get the first parameters as variables, and gather only the rest.
// Here the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName); // Julius Caesar
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");

// ****** The rest parameters must be at the end


// The “arguments” variable
// There is also a special array-like object named arguments that contains all arguments by their index.

function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    // it's iterable
    // for(let arg of arguments) console.log(arg);
}
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.

// But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

// ******* Arrow functions do not have "arguments"

