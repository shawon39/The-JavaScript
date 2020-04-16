// Transparent caching

function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) { // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

console.log(slow(2)); // slow(2) is cached
console.log("Again: " + slow(2)); // the same as the previous line

// Using “func.call” for the context
// Why call ?

function sayHi() {
  console.log(this.name);
}

let user = {
  name: "John"
};
let admin = {
  name: "Admin"
};

// use call to pass different objects as "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin

// And here we use call to call say with the given context and phrase:

function say(phrase) {
  console.log(this.name + ': ' + phrase);
}

let user = {
  name: "John"
};

// user becomes this, and "Hello" becomes the first argument
say.call(user, "Hello"); // John: Hello


// In our case, we can use call in the wrapper to pass the context to the original function:

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log(worker.slow(2)); // works
console.log(worker.slow(2)); // works, doesn't call the original (cached)
// Now everything is fine.


// Now how to cache the multi-argument worker.slow method?

let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)

// So these two calls are almost equivalent:

func.call(context, /*...args*/); // pass an array as list with spread syntax
func.apply(context, args);   // is same as using call

let wrapper = function() {
  return func.apply(this, arguments);
};