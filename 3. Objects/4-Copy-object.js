let animal = {
    eats: true
};

let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
console.log(clone);

// This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].

