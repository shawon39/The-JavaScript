// Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

let str = `Hello`;
alert( str.charAt(0) ); // H

// Strings can’t be changed in JavaScript. It is impossible to change a character.

let str = 'Hi';
str[0] = 'h'; // error
alert( str[0] ); // doesn't work

// Methods:

 toLowerCase()
 toUpperCase()
 indexOf()
 lastIndexOf()
 includes()
 startsWith()
 endsWith()
 slice(2,6)
 substring(2, 6)
 substr()

alert( ~2 ); // -3, the same as -(2+1)
alert( ~1 ); // -2, the same as -(1+1)
alert( ~0 ); // -1, the same as -(0+1)
alert( ~-1 ); // 0, the same as -(-1+1)

let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works
}

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'

let str = "stringify";
alert( str.substr(-4, 2) );

//ASCII

str.codePointAt(pos)
alert( "Z".codePointAt(0) ); // 90
String.fromCodePoint(code)
alert( String.fromCodePoint(90) ); // Z