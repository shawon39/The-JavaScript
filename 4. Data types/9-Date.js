// Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.
let now = new Date()
console.log(now);

// timestamp
// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

// Dates before 01.01.1970 have negative timestamps, e.g.:
let Dec31_1969 = new Date(-24 * 3600 * 1000);

let date = new Date("2017-01-26");
console.log(date);

new Date(year, month, date, hours, minutes, seconds, ms)

// The year must have 4 digits: 2013 is okay, 98 is not.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// Access date components
// There are methods to access the year, month and so on from the Date object:
getFullYear()
getMonth() // Get the month, from 0 to 11.
getDate()
getHours(), getMinutes(), getSeconds(), getMilliseconds()
getDay()

// All the methods above return the components relative to the local time zone.
// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

// current date
let date = new Date();
// the hour in your current time zone
console.log(date.getHours());
// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours());


// Methods

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)


// Date.parse from a string
// The method Date.parse(str) can read a date from a string.

// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.