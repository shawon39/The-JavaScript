// Class inheritance is a way for one class to extend another class.
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.s!
rabbit.hide(); //  White Rabbit hides!

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Any expression is allowed after extends

function f(phrase) {
    return class {
        sayHi() { console.log(phrase) }
    }
}

class User extends f("Hello") { }

new User().sayHi(); // Hello

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


// Overriding a method

// Bottom to up Approach. First it will check own methods. if it !finds inside own method then it will check the parent methods.

// super.method(...) to call a parent method.
// super(...) to call a parent constructor (inside our constructor only).

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


// Arrow functions have no super

// If accessed, it’s taken from the outer function. For instance:

class Rabbit extends Animal {
    stop() {
        setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
}

// Unexpected super
setTimeout(function () { super.stop() }, 1000);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }

    // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.

// Solve
// For the Rabbit constructor to work, it needs to call super() before using this, like here:

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    // ...
}

// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10