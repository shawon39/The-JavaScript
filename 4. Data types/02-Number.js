// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c


Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.

Math.trunc // (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

// Strange

alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004

// That’s why 0.1 + 0.2 is not exactly 0.3.
// we can use toFixed(2) to solve this problem

alert( 9999999999999999 ); // shows 10000000000000000

alert( NaN === NaN ); // false

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

Math.random()
// Returns a random number from 0 to 1 (not including 1)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

// Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000