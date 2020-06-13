// Property getters and setters
// There are two kinds of properties.

// The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

// The second type of properties is something new. It’s accessor properties. They are essentially functions that work on getting and setting a value, but look like regular properties to an external code.

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

// (==>----------------------------------------<==)

// Smarter getters/setters
// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

// For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...

// So, the name is stored in _name property, and the access is done via getter and setter.

// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.