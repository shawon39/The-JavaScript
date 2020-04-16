
// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// Infinity
console.log( 1 / 0 ); 

// NaN, such division is erroneous
console.log( "not a number" / 2 ); 

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

/*

In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.

*/

undefined
// If a variable is declared, but not assigned, then its value is undefined:

null
// The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value:

objects
// objects are used to store collections of data and more complex entities.


typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2) // it's an error

typeof alert // "function"  (3)

/*


Summary
There are 8 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point, integers are limited by ±253.
bigint is for integer numbers of arbitrary length.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

*/