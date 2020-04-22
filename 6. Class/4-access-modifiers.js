// Internal and external interface
// In object-oriented programming, properties and methods are split into two groups:

// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// External interface – methods and properties, accessible also from outside the class.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


// In JavaScript, there are two types of object fields (properties and methods):

// Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
// Private: accessible only from inside the class. These are for the internal interface.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// public
class CoffeeMachine {
    waterAmount = 0; // the amount of water inside

    constructor(power) {
        this.power = power;
        alert(`Created a coffee-machine, power: ${power}`);
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = 200;
//   Right now the properties waterAmount and power are public. We can easily get/set them from the outside to any value.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Protected
// Protected properties are usually prefixed with an underscore _.
class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // Error: Negative water
// Now the access is under control, so setting the water below zero fails.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// To make a Property read only we need to getter and do not need to setter
class CoffeeMachine {
    // ...

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine.power = 25; // Error (no setter)

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Private

class CoffeeMachine {
    #waterLimit = 200;

    #checkWater(value) {
        if (value < 0) throw new Error("Negative water");
        if (value > this.#waterLimit) throw new Error("Too much water");
    }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// To hide an internal interface we use either protected or private properties:

// Protected fields start with _. Programmers should only access a field starting with _ from its class and classes inheriting from it.

// Private fields start with #. JavaScript makes sure we can only access those from inside the class.

// Right now, private fields are not well-supported among browsers, but can be polyfilled.