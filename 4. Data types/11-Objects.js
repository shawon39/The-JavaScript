let user = {
    name: "John",
    age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [["name", "John"],["age", 30]]


// -----------------------

let user = {
    name: "John",
    age: 30
};

// loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
}

//-----------------------

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
// loop over entries
let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
alert(doublePrices.meat); // 8