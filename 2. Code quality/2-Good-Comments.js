
// explanatory comments are given below


// check if i is a prime number
for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
}


// So, explanatory comments are usually bad. Which comments are good?

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

function CalcPow(x, n) {
    return x**n;
}

console.log( CalcPow(2, 5) );