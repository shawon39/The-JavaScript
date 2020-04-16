// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
console.log(typeof json); // we've got a string!
console.log(json);

// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. 

// JSON supports following data types:

// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.

let user = {
    sayHi() { // ignored
        alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
console.log(JSON.stringify(user)); // {} (empty object)


let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{
        name: "John"
    }, {
        name: "Alice"
    }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{
        name: "John"
    }, {
        name: "Alice"
    }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));


// Here space = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:

let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2));

// Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.

// JSON.parse

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert(numbers[1]); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
alert(user.friends[1]); // 1

// Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.

// …And now we need to deserialize it, to turn back into JavaScript object.

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // Error!

// Whoops! An error!
// The value of meetup.date is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?
// Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
alert( meetup.date.getDate() ); // now works!

// By the way, that works for nested objects as well:

// Reference: https://javascript.info/json