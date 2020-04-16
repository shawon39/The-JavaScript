
// Arrow Function
let sum1 = (a, b) => a + b;
console.log(sum1(5,2));

// Without Arrow function
let sum2 = function(a,b) {
    return a+b;
}
console.log(sum2(5,2));

// Multiline arrow functions

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
console.log( sum(1, 2) );