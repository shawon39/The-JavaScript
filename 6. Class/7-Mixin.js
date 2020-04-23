// A mixin example
// The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class.

// For instance here the mixin sayHiMixin is used to add some “speech” for User:

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);
new User("Dude").sayHi(); // Hello Dude!

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

// Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype.