// Recursion is usually shorter
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
console.log(pow(2, 3));
// The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them. 

// Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

// The function to do the job
function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}
console.log(sumSalaries(company)); // 7700


// Linked list

// Imagine, we want to store an ordered list of objects.

// The natural choice would be an array:

// let arr = [obj1, obj2, obj3];
// …But there’s a problem with arrays. The “delete element” and “insert element” operations are expensive. For instance, arr.unshift(obj) operation has to renumber all elements to make room for a new obj, and if the array is big, it takes time. Same with arr.shift().

// The only structural modifications that do not require mass-renumbering are those that operate with the end of array: arr.push/pop. So an array can be quite slow for big queues, when we have to work with the beginning.

// Alternatively, if we really need fast insertion/deletion, we can choose another data structure called a linked list.

// The linked list element is recursively defined as an object with:

// value.
// next property referencing the next linked list element or null if that’s the end.
// For instance:

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// An alternative code for creation:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;


// For instance, to prepend a new value, we need to update the head of the list:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: "new item", next: list };